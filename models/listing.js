const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    price: Number,
    location: String,
    techstack: String,
    revenue: Number,
    users: Number,
    reason: String,
    demolink: String,
    linkedin: String,
    github: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    },
    ],
});

listingSchema.post("findOneAndDelete", async function (listing) {   
    if (listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;