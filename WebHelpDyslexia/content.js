/**
  *
  *
  *
  *
  **/

$(document).ready(function() {
  if(webHelpDyslexia.status) {
    webHelpDyslexia.reopen();
  } else {
    webHelpDyslexia.initialize();
    webHelpDyslexia.open();
  }
});







