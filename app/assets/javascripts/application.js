/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  // custom scripts
  $('#app-button__postcode-search').on('click', function() {
    $('.app-element-to-toggle').removeClass('app-hidden');
    return false;
  });

});
