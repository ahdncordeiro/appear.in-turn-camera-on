setInterval(function(){
  Console.log('Verifying if the camera is off');
  var jQueryButton = $("button:contains('Turn camera back on')");
  if (jQueryButton.length > 0) {
    Console.log('Camera OFF, turning camera ON.');
    jQueryButton.click();
  } else {
    Console.log('Camera still ON, nothing to do.');
  }
}, 60000);
