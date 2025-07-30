const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/expresserror.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      const errMsg = error.details.map((el) => el.message).join(", ");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
};
  

// POST REVIEW ROUTE
router.post("/", isLoggedIn, validateReview, wrapAsync(async (req, res) => {
    console.log(req.params.id);
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log("New Review Saved");
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
  }));
  
  // DELETE REVIEW ROUTE
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  }));
  

module.exports = router;