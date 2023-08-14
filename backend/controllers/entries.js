// require modules 
const express = require('express')
const router = express.Router()
//require db connection
const db = require('../models')


// ROUTES //
console.log(db)
// index
router.get('/', (req, res) => {
    db.Entry.find({})
        .then(entries => res.json(entries))
})

// create
router.post('/', (req, res) => {
    db.Entry.create(req.body)
    .then(entry => res.json(entry))
})

// edit
router.get('/:id/edit', (req, res) => {
    db.Entry.findById(req.params.id)
        .then(entry => res.json('Editing entry: ' + entry._id))
})

// update
router.put('/:id', (req, res) => {
    db.Entry.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(entry => res.json('/entries/' + entry._id))
})

// delete
router.delete('/:id', (req, res) => {
    db.Entry.findByIdAndRemove(req.params.id)
        .then((entries) => res.json(entries))
})

module.exports = router