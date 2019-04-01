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
    if ($postcode === 'PL1 123' || $postcode === 'pl1 123' || $postcode === 'Pl1 123' || $postcode === 'pL1 123' || $postcode === 'pl1123' || $postcode === 'PL1123') {
      $('.app-postcode-list__1').removeClass('app-hidden');
    } else if ($postcode === 'EX4 68D' || $postcode === 'ex4 68d' || $postcode === 'Ex4 68d' || $postcode === 'Ex4 68D' || $postcode === 'ex468d' || $postcode === 'EX468D' || $postcode === 'ex4 68D') {
      $('.app-postcode-list__2').removeClass('app-hidden');
    } else {
      $('.app-postcode-list__3').removeClass('app-hidden');
    }
    return false;
  });

  $('.app-list__postcode-list a').on('click', function() {
    let $address = $(this).text();
    sessionStorage.setItem('address', $address);
  });

  let $addressToDisplay = sessionStorage.getItem('address');
  if ($addressToDisplay.indexOf("Fake") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Plymouth<br>PL1 123');
  } else if ($addressToDisplay.indexOf("Pretend") !== -1) {
    $('#app-address-to-display .app-address-to-display').html($addressToDisplay + '<br>Exeter<br>EX4 68D');
  } else if ($addressToDisplay.indexOf("False") !== -1) {
    $('#app-address-to-display .app-address-to-display').html($addressToDisplay + '<br>Bristol<br>BS4 7SB');
    $('#app-property-price').text('£450,000');
    $('#app-property-sold-date').text('23rd November 2005');
    $('#app-button__pay-successful').attr('href', '08b-paid-property-information');
  }
});
