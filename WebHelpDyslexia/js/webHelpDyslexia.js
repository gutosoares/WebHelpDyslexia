/**
* webHelpDyslexia
*/


var webHelpDyslexia = {
  status: false,
  
	options: {
		position: "top"
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
  }

};

















