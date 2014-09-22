/**
  *
  *
  *
  *
  **/

$(document).ready(function(){
  if(chromexia.status){
    chromexia.reopen();
  }else{
    chromexia.initialize();
    chromexia.open();
  }
});







