/**
  * Arquivo executado quando a página é carregada e quando o ícone 
  * da extensão é acionado.
  **/

try {

  if(webHelpDyslexia.status) {
    webHelpDyslexia.reopen();
  } else {
    webHelpDyslexia.open();
  }

}
catch(err){
    alert("Recarregue a página para utilizar o Web Help Dyslexia!");
}








