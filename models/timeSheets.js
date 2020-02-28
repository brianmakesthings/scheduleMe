const mongoose = require('mongoose');

const timeSheet = new mongoose.Schema({
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
)
