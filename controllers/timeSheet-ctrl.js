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
               message: 'Time Sheet Not Created',
           })
       })
}

updatetimeSheet = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update!',
        })
    }

    timeSheet.findOne({ _id: req.params.id }, (err, timeSheet) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'TimeSheet not found!',
            })
        }
        timeSheet.title = body.title
        timeSheet.dates = body.dates
        timeSheet.timeStart = body.timeStart
        timeSheet.timeEnd = body.timeEnd
        timeSheet.increments = body.increments
        timeSheet
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: timeSheet._id,
                    message: 'timeSheet updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'timeSheet not updated!',
                })
            })
    })
}
