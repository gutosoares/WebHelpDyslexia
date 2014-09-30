/**
* webHelpDyslexia
*/


var webHelpDyslexia = {
  status: false,
  
	options: {
		position: "top",
	},
 
  /**
    * Inicializa as configurações do plugin
    */
  initialize: function() {
    //this.style.initialize();
  },

  /**
    * Abre o plugin
    */
  open: function() {
    this.widget.open();
    this.status = true;
  },
  
  /**
    * Reabre o plugin
    */
  reopen: function() {
    this.widget.reopen();
  }, 

  /**
    * Fecha o plugin
    */
  close: function() {
    webHelpDyslexia.widget.close();
    webHelpDyslexia.status = false;
  }

};

















