$('document').ready(function () {
  console.log('sanity check');
  $.ajax ({
    url: 'https://yepi.io/api/image'
  }).done(function(image) {
    console.log(image);
    $('#picture').append('<br><img src="' + image + '" /><br>')
  })

  $.ajax ({
    url: 'https://yepi.io/api/quote'
  }).done(function(quote) {
    $('#picture').append('<br><p>"' + quote + '"</p><br>');
  })
})
