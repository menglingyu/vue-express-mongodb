const express = require('express')
const router = express.Router()
const Information = require('../models/information')

router.get('/information', (req, res) => {
  Information.find({})
       .sort({ update_at : -1})
       .then(informations => {
         res.json(informations)
       })
       .catch(err => {
         res.json(err)
       })
})

module.exports = router
