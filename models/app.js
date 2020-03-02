
//instantiate a moment object
var moment = require('moment');

  // display value of moment object in #displayMoment div
  // var eDisplayMoment = console.log().getElementById('displayMoment');
  // eDisplayMoment.innerHTML = NowMoment;
//Class to store values of people choosing times
class Person {
  constructor(firstname, lastname, email, datetimebegin, datetimeend) {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    //Will store the date and times a user selects
    this.datetimebegin = [];
    this.datetimeend = [];
  }
}

// Class to store selected dates and times to choose from
class Selectedtimings {
  constructor(date, timebegin, timeend, datetime, display){
    //This will store dates selected as strings
    this.date = [];//This will store dates selected as strings
    //These will store times selected as strings
    this.timebegin = [];
    this.timeend = [];
    //These will store the date and time as moment objects
    this.datetimebegin = [];
    this.datetimeend = [];
    //This will be the dates and times displayed after user selects
    this.display = [];
  }
}

//TESTING AREA
times = new Selectedtimings();
times.date[0] = "2020-03-04";
times.timebegin[0] = "01:30:20";
times.timeend[0] = "09:30:25";
times.datetimebegin[0] = moment(times.date[0] + " " + times.timebegin[0]);
times.datetimeend[0] = moment(times.date[0] + " " + times.timeend[0]);
times.display[0] = times.datetimeend[0].diff(times.datetimebegin[0], "hours");
console.log(times.datetimebegin[0].format());
console.log(times.datetimeend[0].format());
console.log(times.display[0]);
