function() {
  $('.loader').show();
  var form_data = $("#quickcontact").serialize();
  $.ajax({
    type: 'POST',
    dataType: "json",
    url: $('#quickcontact').attr('action'),
    data: form_data,
    error: function(request, error) {
      //console.log(arguments);
      alert(" Can't do because: " + error);
    },
    success: function(redata) {
      $('.loader').html('test');


      var obj = jQuery.parseJSON(JSON.stringify(redata));

      if (obj.errors == 'no') {
        $('.loader').html(obj.getMSG);
      } else {
        $('.errorMsg').html(obj.getMSG);
      }
    }
  });
}