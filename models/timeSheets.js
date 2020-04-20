const mongoose = require('mongoose');
const Person = require('./person.js');
//We can also add date of creation as well?
const timeSheet = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    //This will correlate with Id from person model
    id: {
      type: Number,
      required: true
    },
    dates: {
      type: Date,
      required: true
    },
    timeStart: {
      type: String,
      required: true
    },
    timeEnd: {
      type: String,
      required: true;
    },
    increments: {
      type: Number,
      required: true;
    },
    people: {
      type: [Person]
      required: true;
    }
  }
);

module.exports = mongoose.model('timesheets', timeSheet);
