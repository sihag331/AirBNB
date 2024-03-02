const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://urnabios.com/how-to-really-be-with-nature-a-guided-meditation-in-nature/",
        set: (v) => v === "" ? "https://urnabios.com/how-to-really-be-with-nature-a-guided-meditation-in-nature/" : v,

    },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;














































