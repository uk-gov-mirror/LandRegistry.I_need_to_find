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

  let checkboxRegister = req.session.data['checkbox-register']
  let checkboxTitle = req.session.data['checkbox-title']
  let checkboxC1 = req.session.data['checkbox-c1']
  let checkboxC2 = req.session.data['checkbox-c2']

  let checkbox1fee = req.session.data['checkbox1fee']
  let checkbox2fee = req.session.data['checkbox2fee']
  let checkbox3fee = req.session.data['checkbox3fee']
  let checkbox4fee = req.session.data['checkbox4fee']

  if (checkboxRegister == 'Digital register') {
      req.session.data['checkbox1fee'] = '3';
  } if (checkboxTitle == 'Title plan') {
      req.session.data['checkbox2fee'] = '3';
  } if (checkboxC1 == 'C1') {
      req.session.data['checkbox3fee'] = '3';
  } if (checkboxC2 == 'C2') {
      req.session.data['checkbox4fee'] = '3';
  }

  req.session.data['total'] = 'checkbox1fee'+'checkbox2fee'+'checkbox3fee'+'checkbox4fee';
  res.redirect('/deeds/phase1-1/check-info3')

})



module.exports = router
