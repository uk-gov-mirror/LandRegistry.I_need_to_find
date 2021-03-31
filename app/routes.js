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

router.post('/fee-calculate', function (req, res) {

  let total = 0

  if (req.session.data['checkbox-register']) {
    total = total + parseInt(req.session.data['checkbox-register'][0], 10)
  }
  if (req.session.data['checkbox-title']) {
    total = total + parseInt(req.session.data['checkbox-title'][0], 10)
  }
  if (req.session.data['checkbox-c1']) {
    total = total + parseInt(req.session.data['checkbox-c1'][0], 10)
  }
  if (req.session.data['checkbox-c2']) {
    total = total + parseInt(req.session.data['checkbox-c2'][0], 10)
  }

  req.session.data['total'] = total;

  res.redirect('/deeds/phase1-1/check-info3')

})



module.exports = router
