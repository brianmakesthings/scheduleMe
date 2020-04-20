const mongoose = require('mongoose');

const SelectedTimes = new mongoose.Schema({
  timeStart: {
    type: Date,
    required: true
  },
  timeEnd: {
    type: Date,
    required: true
  }
}
);

const person = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true
  },
  selectedTimes: {
    type: [SelectedTimes],
    required: true
  }
}
);

module.exports = mongoose.model('persons', person);
