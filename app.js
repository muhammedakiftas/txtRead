$(document).ready(function() {

  $.getJSON("sozlerY.txt", function(json) {
      console.log(json); // this will show the info it in firebug console
  });

});
