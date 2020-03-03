const mongoose = require('mongoose');

const timeSheet = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    dates: {
      type: Array,
      required: true
    },
    timeStart: {
      type: Date,
      required: true
    },
    timeEnd: {
      type: Date,
      required: true;
    },
    increments: {
      type: Number,
      required: true;
    }
  }
);

module.exports = mongoose.model('timesheets', timeSheet);
