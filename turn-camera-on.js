setInterval(function(){
  console.log('Verifying if the camera is OFF');
  var jQueryButton = $("button:contains('Turn camera back on')");
  if (jQueryButton.length > 0) {
    console.log('Camera OFF, turning camera ON.');
    jQueryButton.click();
  } else {
    console.log('Camera still ON, nothing to do.');
  }
}, 60000);
