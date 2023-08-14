// require modules 
const express = require('express')
const router = express.Router()
//require db connection
const db = require('../models')


// ROUTES //
console.log(db)
// index
router.get('/', (req, res) => {
    db.Detail.find({})
        .then(details => res.json(details))
})

// create
router.post('/', (req, res) => {
    db.Detail.create(req.body)
    .then(detail => res.json(detail))
})

// edit
router.get('/:id/edit', (req, res) => {
    db.Detail.findById(req.params.id)
        .then(detail => res.json(detail))
})

// update
router.put('/:id', (req, res) => {
    db.Detail.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(detail => res.json('/details/' + detail._id))
})

// delete
router.delete('/:id', (req, res) => {
    db.Detail.findByIdAndRemove(req.params.id)
        .then((details) => res.json(details))
})

module.exports = router