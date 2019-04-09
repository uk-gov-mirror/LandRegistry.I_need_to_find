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
    } else if ($postcode.indexOf('BS4') !== -1 || $postcode.indexOf('bs4') !== -1 || $postcode.indexOf('Bs4') !== -1 || $postcode.indexOf('bS4') !== -1) {
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
    $('#app-easements-indicator').text('There are no easements recorded in the register');
    $('#app-covenants-indicator').text('There are no restrictive covenants recorded in the register');
    $('.app-map').attr('src', '/public//images/peel-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/peel-street-extent_large.png');
  } else if ($addressToDisplay.indexOf("Clinton") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Exeter<br>EX4 1AX');
    $('.app-map').attr('src', '/public//images/clinton-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/clinton-street-extent_large.png');
    $('#app-property-price').text('£450,000');
    $('#app-property-sold-date').text('23 November 2005');
    $('#app-button__pay-successful').attr('href', '08b-paid-property-information');
  } else if ($addressToDisplay.indexOf("False") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Bristol<br>BS4 7SB');
    $('#app-property-price').text('£450,000');
    $('#app-property-sold-date').text('23 November 2005');
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
