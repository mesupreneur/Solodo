const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/solodo";

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("Hi, I am a root");
});

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// New Route
app.get("/listings/new", async (req, res) => {
    res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing =  await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});


// Create Route
app.post("/listings", async (req, res) => {
   const newListing = new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
});


// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    const listing =  await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

// Upadate Route
app.put("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});


// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "AgenticFlow",
//         description: "Build AI agents to launch, market, and scale your business—without writing any code",
//         price: 59,
//         location: "Kathmandu",
//         revenue: 10000,
//         users: 1000,
//         reason: "Fund Problem",
//         demolink: "https://agenticflow.ai",
//         linkedin: "https://www.linkedin.com/company/agenticflow",
//         github: "https://github.com/mesupreneur"
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, ()=> {
    console.log("server is listening to port 8080");
});
