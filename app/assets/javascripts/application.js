/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  // custom scripts
  $('#app-button__postcode-search').on('click', function() {
    let $postcode = $('#app-input-postcodeSearch').val();
    if ($postcode.indexOf('PL1') !== -1 || $postcode.indexOf('pl1') !== -1 || $postcode.indexOf('Pl1') !== -1 || $postcode.indexOf('pL1') !== -1) {
      $('.app-postcode-list__1').removeClass('app-hidden');
    } else if ($postcode.indexOf('EX4') !== -1 || $postcode.indexOf('ex4') !== -1 || $postcode.indexOf('Ex4') !== -1 || $postcode.indexOf('eX4') !== -1) {
      $('.app-postcode-list__2').removeClass('app-hidden');
    } else if ($postcode.indexOf('BS6') !== -1 || $postcode.indexOf('bs6') !== -1 || $postcode.indexOf('Bs6') !== -1 || $postcode.indexOf('bS6') !== -1) {
      $('.app-postcode-list__3').removeClass('app-hidden');
    }
    return false;
  });

  $('.app-list__postcode-list a').on('click', function() {
    let $address = $(this).text();
    sessionStorage.setItem('address', $address);
  });

  let $addressToDisplay = sessionStorage.getItem('address');
  if ($addressToDisplay.indexOf("Peel") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Plymouth<br>PL1 3SB');
    $('.app-house-price-index-authority').text('Property price trend for City of Plymouth');
    $('.app-property-type').text('Terraced');
    $('.app-price-paid-list').html('<b>&pound;107,000</b> on 26 September 2008<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=8&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Peel+Street&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Plymouth');
    $('.app-percentage-index-change').text('+3.2%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fcity-of-plymouth&to=2019-03-01');
    $('#app-constraints-indicator, #app-constraints-information').text('There are no legal constraints recorded in the register');
    $('.app-map').attr('src', '/public//images/peel-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/peel-street-extent_large.png');
  } else if ($addressToDisplay.indexOf("Clinton") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Exeter<br>EX4 1AX');
    $('.app-house-price-index-authority').text('Property price trend for Exeter');
    $('.app-property-type').text('Terraced');
    $('.app-price-paid-list').html('<b>&pound;161,000</b> on 26 August 2011<br><b>&pound;125,000</b> on 14 May 2010<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=3&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Clinton+Street&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Exeter');
    $('.app-percentage-index-change').text('+1%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fexeter&to=2019-03-01');
    $('#app-constraints-indicator').text('There are legal constraints recorded in the register - to view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/clinton-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/clinton-street-extent_large.png');
    $('#app-button__pay-successful').attr('href', '08b-paid-property-information');
  } else if ($addressToDisplay.indexOf("Elgin") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Bristol<br>BS6 6RU');
    $('.app-house-price-index-authority').text('Property price trend for City Bristol');
    $('.app-property-type').text('Semi detached');
    $('.app-price-paid-list').html('<b>&pound;582,500</b> on 10 September 2009<br><b>&pound;462,000</b> on 23 September 2005<br><b>&pound;385,000</b> on 10 December 2004<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=10&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Elgin+Park&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Bristol');
    $('.app-percentage-index-change').text('+1.3%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fcity-of-bristol&to=2019-03-01');
    $('#app-constraints-indicator').text('There are legal constraints recorded in the register - to view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/elgin-park-extent.png');
    $('.app-map_large').attr('src', '/public//images/elgin-park-extent_large.png');
    $('#app-button__pay-successful').attr('href', '08b-paid-property-information');
  }
});

$('#app-link-from-03').on('click', function() {
  sessionStorage.setItem('linkBackHref', '03-free-property-information');
});
$('#app-link-from-08').on('click', function() {
  sessionStorage.setItem('linkBackHref', '08-paid-property-information');
});
$('#app-link-from-08b').on('click', function() {
  sessionStorage.setItem('linkBackHref', '08b-paid-property-information');
});

let $linkBackHref = sessionStorage.getItem('linkBackHref');
$('.app-back-link').attr('href', $linkBackHref);
