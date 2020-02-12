const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/01-2020/dataClean', function (req, res) {

  req.session.data = {}
  res.redirect('search-by-postcode-or-street-name')
})

module.exports = router
