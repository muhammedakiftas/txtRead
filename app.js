$(document).ready(function() {

  $.getJSON("kitap.json", function(json) {
      console.log(json); // this will show the info it in firebug console
  });

});
