const express = require('express')
const router = express.Router()
const path = require('path')

// Add your routes here - above the module.exports line
router.use('/node_modules', express.static('node_modules'))

router.post('/deeds-OC2-1/test', function (req, res) {

  let regAnswer = req.session.data['docsReg']

  if (regAnswer === 'yes-docs') {
    res.redirect('/deeds-OC2-1/request-deeds-not-in-reg')
  }
  if (regAnswer === 'no-docs') {
    res.redirect('/deeds-OC2-1/check-doc-information')
  }
})

router.post('/deeds-OC2-2/test2', function (req, res) {

  let regAnswer = req.session.data['docsReg2']

  if (regAnswer === 'yes-docs') {
    res.redirect('/deeds-OC2-2/request-deeds-not-in-reg')
  }
  if (regAnswer === 'no-docs') {
    res.redirect('/deeds-OC2-2/check-doc-information-not-requested')
  }
})

router.post('/deeds-OC2-3/test3', function (req, res) {

  let regAnswer = req.session.data['docsReg3']

  if (regAnswer === 'yes-docs') {
    res.redirect('/deeds-OC2-3/request-deeds-not-in-reg')
  }
  if (regAnswer === 'no-docs') {
    res.redirect('/deeds-OC2-3/check-doc-information-without-requested')
  }
})




module.exports = router
