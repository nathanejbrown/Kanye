$('document').ready(function () {
  console.log('sanity check');
  $.ajax ({
    url: 'https://yepi.io/api/image'
  }).done(function(image) {
    console.log(image);
    $('#picture').append('<img src="' + image + '" />')
  })

  $.ajax ({
    url: 'https://yepi.io/api/quote'
  }).done(function(quote) {
    $('#quote').append('<p>"' + quote + '"</p>');
  })
})
