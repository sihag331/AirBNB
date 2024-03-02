const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



  const Mongo_URL = ("mongodb://127.0.0.1:27017/wanderlust");

main().then(()=>{
    console.log("Connected to Our Data-Base")
}).catch(err => {
    console.log(err);
})

async function main() {
    await mongoose.connect(Mongo_URL);
}


const initDb = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");

};

initDb();









































