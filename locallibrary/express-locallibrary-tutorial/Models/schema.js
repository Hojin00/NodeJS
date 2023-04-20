// File: ./models/somemodel.js

// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("SomeModel", SomeModelSchema);

//Use this in other files
// Create a SomeModel model just by requiring the module
const SomeModel = require("./somemodel");

// Use the SomeModel object (model) to find all SomeModel records
SomeModel.find(callback_function);


// Populate actual content of the associated document,
Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // This populates the author id with actual author information!
  .exec((err, story) => {
    if (err) return handleError(err);
    console.log("The author is %s", story.author.name);
    // prints "The author is Bob Smith"
  });