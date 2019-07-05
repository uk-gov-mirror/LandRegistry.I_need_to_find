/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
};

function addErrorMessage(message, input_field, inline_error, summary_error){

  $('.govuk-form-group').addClass('govuk-form-group--error')
  $(input_field).addClass('govuk-input--error')
  $(inline_error).removeClass('app-hidden')
  $(summary_error).removeClass('app-hidden')
  $('#summary-text').text(message)
  $('#inline-text').text(message)
}

function removeErrorMessage(input_field, inline_error, summary_error){
  $('.govuk-form-group').removeClass('govuk-form-group--error')
  $(input_field).removeClass('govuk-input--error')
  $(inline_error).addClass('app-hidden')
  $(summary_error).addClass('app-hidden')
  $('#summary-text').text('')
  $('#inline-text').text('')
}

function postcodeSearch(){

  let postcode = $('#app-input-postcodeSearch').val().toUpperCase();

  $('.app-postcode-list__1').addClass('app-hidden');
  $('.app-postcode-list__2').addClass('app-hidden');
  $('.app-postcode-list__3').addClass('app-hidden');
  $('.app-postcode-list__4').addClass('app-hidden')

  removeErrorMessage('#app-input-postcodeSearch', '#enter-a-postcode-error', '#postcode-error-summary')

  if (postcode === ''){

    addErrorMessage('Enter a postcode or street name',
                                    '#app-input-postcodeSearch',
                                    '#enter-a-postcode-error',
                                    '#postcode-error-summary');

  }else if (postcode.indexOf('PL1') !== -1 || postcode.indexOf('PEEL') !== -1 || postcode.indexOf('PEAL') !== -1) {

    $('.app-postcode-list__1').removeClass('app-hidden');

  } else if (postcode.indexOf('EX4')!== -1 ||  postcode.indexOf('CLINTON')!== -1  || postcode.indexOf('CLNTN')!== -1 ) {

    $('.app-postcode-list__2').removeClass('app-hidden');

  } else if (postcode.indexOf('BS6')!== -1   || postcode.indexOf('ELGIN')!== -1) {

    $('.app-postcode-list__3').removeClass('app-hidden');

  }else{r
    $('.app-postcode-list__4').removeClass('app-hidden')
  }
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  $("#app-input-postcodeSearch").on('keyup', function (e) {
    if (e.keyCode == 13) {
        postcodeSearch()
    }
  })

  // storing the address so we can recall it whenever we want.
  // when an address is clicked from the list
  $('.app-list__postcode-list a').on('click', function() {
    // assign the text inside that link to $address variable
    let $address = $(this).text();
    // save this value in the browser's memory and call it address
    sessionStorage.setItem('address', $address);
  });

  // find the value of address from the browser's memory and assign it to $addressToDisplay variable
  let $addressToDisplay = sessionStorage.getItem('address');
  // if $addressToDisplay contains the word Peel, run this
  if ($addressToDisplay.indexOf("Peel") !== -1) {
    // for all the following, find the element and replace the text or html within it accordingly
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
    // if $addressToDisplay contains the word Clinton, run this
  } else if ($addressToDisplay.indexOf("Clinton") !== -1) {
    // for all the following, find the element and replace the text or html within it accordingly
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Exeter<br>EX4 1AX');
    $('.app-house-price-index-authority').text('Property price trend for Exeter');
    $('.app-property-type').text('Terraced');
    $('.app-price-paid-list').html('<b>&pound;161,000</b> on 26 August 2011<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=3&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Clinton+Street&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Exeter');
    $('.app-percentage-index-change').text('+1%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fexeter&to=2019-03-01');
    $('#app-constraints-indicator').text('There are more entries in the register that affect the use of this property. To view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/clinton-street-extent.png');
    $('.app-map_large').attr('src', '/public//images/clinton-street-extent_large.png');
    $('.app-link-variable').attr('href', '09-paid-property-information');
    // if $addressToDisplay contains the word Elgin, run this
  } else if ($addressToDisplay.indexOf("Elgin") !== -1) {
    // for all the following, find the element and replace the text or html within it accordingly
    $('#app-address-to-display, .app-address-to-display').html($addressToDisplay + '<br>Bristol<br>BS6 6RU');
    $('.app-house-price-index-authority').text('Property price trend for City Bristol');
    $('.app-property-type').text('Semi detached');
    $('.app-price-paid-list').html('<b>&pound;582,500</b> on 10 September 2009<br>');
    $('.app-price-paid-link').attr('href', 'http://landregistry.data.gov.uk/app/ppd/search?et%5B%5D=lrcommon%3Afreehold&et%5B%5D=lrcommon%3Aleasehold&limit=100&nb%5B%5D=true&nb%5B%5D=false&paon=10&ptype%5B%5D=lrcommon%3Adetached&ptype%5B%5D=lrcommon%3Asemi-detached&ptype%5B%5D=lrcommon%3Aterraced&ptype%5B%5D=lrcommon%3Aflat-maisonette&ptype%5B%5D=lrcommon%3AotherPropertyType&street=Elgin+Park&tc%5B%5D=ppd%3AstandardPricePaidTransaction&tc%5B%5D=ppd%3AadditionalPricePaidTransaction&town=Bristol');
    $('.app-percentage-index-change').text('+1.3%');
    $('.app-house-price-index-information').attr('href', 'http://landregistry.data.gov.uk/app/ukhpi/browse?from=2018-03-01&location=http%3A%2F%2Flandregistry.data.gov.uk%2Fid%2Fregion%2Fcity-of-bristol&to=2019-03-01');
    $('#app-constraints-indicator').text('There are more entries in the register that affect the use of this property. To view details you\'ll need to pay a fee');
    $('.app-map').attr('src', '/public//images/elgin-park-extent.png');
    $('.app-map_large').attr('src', '/public//images/elgin-park-extent_large.png');
    $('.app-link-variable').attr('href', '09b-paid-property-information');
  }

  // glossary page link
  // when this link is clicked
  $('#app-link-from-03').on('click', function() {
    // save the value 03-free-property-information in the browser's memory and call it linkBackHref
    sessionStorage.setItem('linkBackHref', '03-free-property-information');
  });
  // when this link is clicked
  $('#app-link-from-08').on('click', function() {
    // save the value 09-paid-property-information in the browser's memory and call it linkBackHref
    sessionStorage.setItem('linkBackHref', '09-paid-property-information');
  });
  // when this link is clicked
  $('#app-link-from-08b').on('click', function() {
    // save the value 09b-paid-property-information in the browser's memory and call it linkBackHref
    sessionStorage.setItem('linkBackHref', '09b-paid-property-information');
  });

  // find the value of linkBackHref from the browser's memory and assign it to $linkBackHref variable
  let $linkBackHref = sessionStorage.getItem('linkBackHref');
  // set the target of this link to the value of $linkBackHref
  $('.app-back-link').attr('href', $linkBackHref);

  // when this link is clicked, run this
  $('.app-glossary-link').on('click', function() {
    // if this link has a class called app-glossary-link__start, run this
    if($(this).hasClass('app-glossary-link__start')) {
      // save the value 01-start in the browser's memory and call it linkBackFromGlossary
      sessionStorage.setItem('linkBackFromGlossary', '01-start');
      // if this link has a class called app-glossary-link__choice
    } else if ($(this).hasClass('app-glossary-link__choice')) {
      // save the value 04-choose-what-to-buy in the browser's memory and call it linkBackFromGlossary
      sessionStorage.setItem('linkBackFromGlossary', '04-choose-what-to-buy');
      // if this link has a class called app-glossary-link__free
    } else if ($(this).hasClass('app-glossary-link__free')) {
      // save the value 03-free-property-informationin the browser's memory and call it linkBackFromGlossary
      sessionStorage.setItem('linkBackFromGlossary', '03-free-property-information');
    } else if ($(this).hasClass('app-glossary-link__start-welsh')) {
      sessionStorage.setItem('linkBackFromGlossary', '01-start_welsh');
    }
  });

  // find the value of linkBackFromGlossary from the browser's memory and assign it to linkBackFromGlossary variable
  let linkBackFromGlossary = sessionStorage.getItem('linkBackFromGlossary');
  // when this link is clicked
  $('.app-back-link-from-glossary').on('click', function() {
    // set the target to the value of linkBackFromGlossary
    $(this).attr('href', linkBackFromGlossary);
  });

  /* ugly hack for checkbox data */

  // when the register checkbox or its label is clicked
  $('.app-register-checkbox, .app-register-checkbox-label').on('click', function() {
    // if either has a class named 'checked'
    if ($(this).hasClass('checked')) {
      // write 'This is now unchecked' in the console
      console.log('This is now unchecked');
      // remove the class 'checked'
      $(this).removeClass('checked');
      // if it doesn't have a class named 'checked'
    } else {
      // write 'This is now checked' in the console
      console.log('This is now checked');
      // add the class 'checked'
      $(this).addClass('checked');
    }
  });
  // same as above, but with the second checkbox and label
  $('.app-title-checkbox, .app-title-checkbox-label').on('click', function() {
    if ($(this).hasClass('checked')) {
      console.log('This is now unchecked');
      $(this).removeClass('checked');
    } else {
      console.log('This is now checked');
      $(this).addClass('checked');
    }
  });
  // same as above, but with the third checkbox and label
  $('.app-deed-checkbox, .app-deed-checkbox-label').on('click', function() {
    if ($(this).hasClass('checked')) {
      console.log('This is now unchecked');
      $(this).removeClass('checked');
    } else {
      console.log('This is now checked');
      $(this).addClass('checked');
    }
  });
  // when this button is clicked, run this
  $('.app-select-product-button').on('click', function() {
    // if this checkbox has a class named 'checked', run this
    if($('.app-register-checkbox').hasClass('checked')) {
      // save the value yes in the browser's memory and call it registerToPayFor
      sessionStorage.setItem('registerToPayFor', 'yes');
      // if not
    } else {
      // save the value no in the browser's memory and call it registerToPayFor
      sessionStorage.setItem('registerToPayFor', 'no');
    }
    // repeat for the second checkboxes
    if($('.app-title-checkbox').hasClass('checked')) {
      sessionStorage.setItem('titleToPayFor', 'yes');
    } else {
      sessionStorage.setItem('titleToPayFor', 'no');
    }
    // repeat for the third checkbox
    if($('.app-deed-checkbox').hasClass('checked')) {
      sessionStorage.setItem('deedToPayFor', 'yes');
    } else {
      sessionStorage.setItem('deedToPayFor', 'no');
    }
  })

  // find the value of registerToPayFor from the browser's memory and assign it to registerToPayFor
  let registerToPayFor = sessionStorage.getItem('registerToPayFor');
  // write in the browser what registerToPayFor is
  console.log(registerToPayFor);
  // if registerToPayFor is yes, run this
  if (registerToPayFor === 'yes') {
    // add the class named 'checked' to the checkbox
    $('.app-register-checkbox').addClass('checked');
  }
  // repeat for title and deed
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

  // create an array called allItemsToPay and put the values of registerToPayFor, titleToPayFor, deedToPayFor inside ir
  let allItemsToPay = [registerToPayFor, titleToPayFor, deedToPayFor];
  // write the contents of the array
  console.log(allItemsToPay);
  // remove all items that are undefined or null, i.e. remove all items that are neither yes nor no
  allItemsToPay = allItemsToPay.filter(Boolean);
  // run a loop 3 times, i.e. the length of the array (the number of items inside the array)
  for (var i = 0; i < allItemsToPay.length; i++) {
    // if an item is 'no'
    if (allItemsToPay[i] === 'no') {
      // remove that item from the array
      allItemsToPay.splice(i, 1);
      // make sure you repeat this for all three items
      i--;
    }
  }
  // count the number of items remaining in allItemsToPay array and assign its value to the variable numberOfItemsToPay
  let numberOfItemsToPay = allItemsToPay.length;
  // if there is one item, run this
  if (numberOfItemsToPay === 1) {
    // write 3 inside this element
    $('.app-total-amount').text('3');
    // if there are two items
  } else if (numberOfItemsToPay === 2) {
    // write 6 inside this element
    $('.app-total-amount').text('6');
    // if there are three items
  } else if (numberOfItemsToPay === 3) {
    // write 9 inside this element
    $('.app-total-amount').text('9')
  }

  // create an empty array anc call if itemsPurchasedList
  let itemsPurchasedList = [];
  // if registerToPayFor variable equals yes, run this
  if (registerToPayFor === 'yes') {
    // add this text as an item to itemsPurchasedList array
    itemsPurchasedList.push('Title register (official copy)');
  }
  // if titleToPayFor variable equals yes, run this
  if (titleToPayFor === 'yes') {
    // add this text as an item to itemsPurchasedList array
    itemsPurchasedList.push('Title plan (official copy)');
  }
  // if deedToPayFor variable equals yes, run this
  if (deedToPayFor === 'yes') {
    // add this text as an item to itemsPurchasedList array
    itemsPurchasedList.push('Copy of title deeds');
  }
  // write the contents of itemsPurchasedList array in the console
  console.log(itemsPurchasedList);
  // create an empty array anc call if itemsPurchasedListToDisplay
  let itemsPurchasedListToDisplay = [];
  // for each of the items in the itemsPurchasedList array, run this
  $.each(itemsPurchasedList, function(index, value) {
    // add the following html snippet, including the value of the item, as a single item
    itemsPurchasedListToDisplay.push('<span>' + value + '</span><br>');
  });
  // join all items and remove the whitespace, i.e. create an html bit on the page
  $('.app-items-purchased-list').html(itemsPurchasedListToDisplay.join(""));

  // displaying the purchased items on the last page
  // if registerToPayFor is yes, i.e. they purchased an official copy of the register
  if (registerToPayFor === 'yes') {
    // remove the app-hidden class from this element, i.e. display the download link
    $('.app-copy-of-register-ok').removeClass('app-hidden')
  }
  // same for title
  if (titleToPayFor === 'yes') {
    $('.app-copy-of-title-ok').removeClass('app-hidden');
  }
  // same for deeds
  if (deedToPayFor === 'yes') {
    $('.app-copy-of-deeds-ok').removeClass('app-hidden');
  }
});
