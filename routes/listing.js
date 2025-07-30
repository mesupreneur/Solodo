const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/expresserror.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const mongoose = require("mongoose");
const {isLoggedIn, isOwner} = require("../middleware.js");


// JOI validation middleware
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
      const errMsg = error.details.map((el) => el.message).join(", ");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  };

// INDEX
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}));
  
  // NEW
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});
  
  // CREATE
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}));
  
  // SHOW
router.get("/:id", wrapAsync(async (req, res, next) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ExpressError(400, "Invalid Listing ID"));
    }
  
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
      return next(new ExpressError(404, "Listing not found"));
    }
  
    res.render("listings/show.ejs", { listing });
}));


  // EDIT
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
}));

// UPDATE
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Updated Listing!");
  res.redirect(`/listings/${id}`);
}));

// DELETE
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
}));


module.exports = router;