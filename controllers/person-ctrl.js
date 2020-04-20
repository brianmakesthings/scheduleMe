const Person = require('../models/person-model')

createPerson = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a person',
        })
    }

    const person = new Person(body)

   if (!person) {
       return res.status(400).json({ success: false, error: err })
   }

   person
       .save()
       .then(() => {
           return res.status(201).json({
               success: true,
               id: person._id,
               message: 'Person created!',
           })
       })
       .catch(error => {
           return res.status(400).json({
               error,
               message: 'Person not created!',
           })
       })
}

updatePerson = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Person.findOne({ _id: req.params.id }, (err, person) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Person not found!',
            })
        }
        person.name = body.name
        person.email = body.email
        person.role = body.role
        person.selectedTimes = body.selectedTimes
        person
            .save()
            .then(() => {
              return res.status(200).json({
                  success: true,
                  id: person._id,
                  message: 'Person updated!',
              })
          })
          .catch(error => {
              return res.status(404).json({
                  error,
                  message: 'Person not updated!',
              })
          })
    })
}

deletePerson = async (req, res) => {
    await Person.findOneAndDelete({ _id: req.params.id }, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!person) {
            return res
                .status(404)
                .json({ success: false, error: `Person not found` })
        }

        return res.status(200).json({ success: true, data: person })
    }).catch(err => console.log(err))
}

getPersonById = async (req, res) => {
    await Person.findOne({ _id: req.params.id }, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!person) {
            return res
                .status(404)
                .json({ success: false, error: `Person not found` })
        }
        return res.status(200).json({ success: true, data: person })
    }).catch(err => console.log(err))
}

getPersons = async (req, res) => {
    await Person.find({}, (err, person) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!person.length) {
            return res
                .status(404)
                .json({ success: false, error: `Person not found` })
        }
        return res.status(200).json({ success: true, data: persons })
    }).catch(err => console.log(err))
}

module.exports = {
  createPerson,
  updatePerson,
  deletePerson,
  getPersons,
  getPersonById,
}
