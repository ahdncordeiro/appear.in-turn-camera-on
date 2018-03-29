setInterval(function(){
  var jQueryButton = $("button:contains('Turn camera back on')");
  if (jQueryButton.length > 0) {
    jQueryButton.click();
  }
}, 60000);
