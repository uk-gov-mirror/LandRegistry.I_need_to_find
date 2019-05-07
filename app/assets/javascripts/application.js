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
    $('.app-house-price-index-authority').text('Property price trends for Plymouth');
    $('.app-property-type').text('Terraced');
    $('.app-price-paid-list').html('<b>&pound;107,000</b> on 26 September 2008<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=8&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Peel+Street&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Plymouth');
    $('.app-percentage-index-change').text('+3.2%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fcity-of-plymouth&to=2019-03-01');
    $('#app-constraints-indicator, #app-constraints-information').text('There are no other entries in the register that affect the use of this property. There may be some that have not been recorded.');
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
    $('#app-constraints-indicator').text('There are more entries in the register that affect the use of this property. To view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/clinton-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/clinton-street-extent_large.png');
    $('.app-link-variable').attr('href', '09b-paid-property-information');
  } else if ($addressToDisplay.indexOf("Elgin") !== -1) {
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Bristol<br>BS6 6RU');
    $('.app-house-price-index-authority').text('Property price trend for City Bristol');
    $('.app-property-type').text('Semi detached');
    $('.app-price-paid-list').html('<b>&pound;582,500</b> on 10 September 2009<br><b>&pound;462,000</b> on 23 September 2005<br><b>&pound;385,000</b> on 10 December 2004<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=10&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Elgin+Park&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Bristol');
    $('.app-percentage-index-change').text('+1.3%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fcity-of-bristol&to=2019-03-01');
    $('#app-constraints-indicator').text('There are more entries in the register that affect the use of this property. To view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/elgin-park-extent.png');
    $('.app-map_large').attr('src', '/public//images/elgin-park-extent_large.png');
    $('.app-link-variable').attr('href', '09b-paid-property-information');
  }
});

$('#app-link-from-03').on('click', function() {
  sessionStorage.setItem('linkBackHref', '03-free-property-information');
});
$('#app-link-from-08').on('click', function() {
  sessionStorage.setItem('linkBackHref', '09-paid-property-information');
});
$('#app-link-from-08b').on('click', function() {
  sessionStorage.setItem('linkBackHref', '09b-paid-property-information');
});

let $linkBackHref = sessionStorage.getItem('linkBackHref');
$('.app-back-link').attr('href', $linkBackHref);

$('.app-glossary-link').on('click', function() {
  if($(this).hasClass('app-glossary-link__start')) {
    sessionStorage.setItem('linkBackFromGlossary', '01-start');
  } else if ($(this).hasClass('app-glossary-link__choice')) {
    sessionStorage.setItem('linkBackFromGlossary', '04-choose-what-to-buy');
  }
});

let linkBackFromGlossary = sessionStorage.getItem('linkBackFromGlossary');
$('.app-back-link-from-glossary').on('click', function() {
  $(this).attr('href', linkBackFromGlossary);
});

/* ugly hack for checkbox data */

$('.app-register-checkbox, .app-register-checkbox-label').on('click', function() {
  if ($(this).hasClass('checked')) {
    console.log('This is now unchecked');
    $(this).removeClass('checked');
  } else {
    console.log('This is now checked');
    $(this).addClass('checked');
  }
});

$('.app-title-checkbox, .app-title-checkbox-label').on('click', function() {
  if ($(this).hasClass('checked')) {
    console.log('This is now unchecked');
    $(this).removeClass('checked');
  } else {
    console.log('This is now checked');
    $(this).addClass('checked');
  }
});

$('.app-deed-checkbox, .app-deed-checkbox-label').on('click', function() {
  if ($(this).hasClass('checked')) {
    console.log('This is now unchecked');
    $(this).removeClass('checked');
  } else {
    console.log('This is now checked');
    $(this).addClass('checked');
  }
});

$('.app-select-product-button').on('click', function() {
  if($('.app-register-checkbox').hasClass('checked')) {
    sessionStorage.setItem('registerToPayFor', 'yes');
  } else {
    sessionStorage.setItem('registerToPayFor', 'no');
  }
  if($('.app-title-checkbox').hasClass('checked')) {
    sessionStorage.setItem('titleToPayFor', 'yes');
  } else {
    sessionStorage.setItem('titleToPayFor', 'no');
  }
  if($('.app-deed-checkbox').hasClass('checked')) {
    sessionStorage.setItem('deedToPayFor', 'yes');
  } else {
    sessionStorage.setItem('deedToPayFor', 'no');
  }
})

let registerToPayFor = sessionStorage.getItem('registerToPayFor');
console.log(registerToPayFor);
if (registerToPayFor === 'yes') {
  $('.app-register-checkbox').addClass('checked');
}
let titleToPayFor = sessionStorage.getItem('titleToPayFor');
console.log(titleToPayFor);
if (titleToPayFor === 'yes') {
  $('.app-title-checkbox').addClass('checked');
}
let deedToPayFor = sessionStorage.getItem('deedToPayFor');
console.log(deedToPayFor);
if (deedToPayFor === 'yes') {
  $('.app-deed-checkbox').addClass('checked');
}
let allItemsToPay = [registerToPayFor, titleToPayFor, deedToPayFor];
console.log(allItemsToPay);
allItemsToPay = allItemsToPay.filter(Boolean);
for (var i = 0; i < allItemsToPay.length; i++) {
  if (allItemsToPay[i] === 'no') {
    allItemsToPay.splice(i, 1);
    i--;
  }
}
let numberOfItemsToPay = allItemsToPay.length;
// console.log(numberOfItemsToPay);
if (numberOfItemsToPay === 1) {
  $('.app-total-amount').text('3');
} else if (numberOfItemsToPay === 2) {
  $('.app-total-amount').text('6')
} else if (numberOfItemsToPay === 3) {
  $('.app-total-amount').text('9')
}

let itemsPurchasedList = [];
if (registerToPayFor === 'yes') {
  itemsPurchasedList.push('Title register (official copy)');
}
if (titleToPayFor === 'yes') {
  itemsPurchasedList.push('Title plan (official copy)');
}
if (deedToPayFor === 'yes') {
  itemsPurchasedList.push('Copy of title deeds');
}
// console.log(itemsPurchasedList);
let itemsPurchasedListToDisplay = [];
$.each(itemsPurchasedList, function(index, value) {
  itemsPurchasedListToDisplay.push('<span>' + value + '</span><br>');
});
$('.app-items-purchased-list').html(itemsPurchasedListToDisplay.join(""));

if (registerToPayFor === 'yes') {
  $('.app-copy-of-register-ok').removeClass('app-hidden')
}
if (titleToPayFor === 'yes') {
  $('.app-copy-of-title-ok').removeClass('app-hidden');
}
if (deedToPayFor === 'yes') {
  $('.app-copy-of-deeds-ok').removeClass('app-hidden');
}
