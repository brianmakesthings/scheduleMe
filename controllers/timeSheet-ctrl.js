const timeSheet = require('../models/timeSheets.js');

createTimeSheet = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a title",
    })
  }

  const timeSheet = new timeSheet(body);

  if (!timeSheet) {
       return res.status(400).json({ success: false, error: err })
   }

   timeSheet
       .save()
       .then(() => {
           return res.status(201).json({
               success: true,
               id: timeSheet._id,
               message: 'Time Sheet Created',
           })
       })
       .catch(error => {
           return res.status(400).json({
               error,
               message: 'Time Sheet Created',
           })
       })
}
