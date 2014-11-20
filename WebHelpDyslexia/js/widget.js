/*
* Monta os elementos da
*/

webHelpDyslexia.widget = {
  
  // Armazena os principais elementos da estrutura da extension
  extension: {
    box: null,
    container: null,
    font_section: null,
    color_section: null,
    align_section: null,
    spacing_section: null,
    reset_section: null,
    highlight_section: null,
    readingTools_section: null
  },

  //Cria a interface de usuário
  create: function(){
    var self = webHelpDyslexia.widget;

    // div que que contém o plugin
    self.extension.box = $("<div>", {
      id: 'webHelpDyslexia-box',
      class: 'webHelpDyslexia-top'
    })
    .appendTo(document.body);

    self.extension.container = $("<div>", {
      id: 'webHelpDyslexia-container'
    });

    var italic_button = $("<div>", {
      id: 'webHelpDyslexia-italic-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover texto em itálico'
    })
    .click(
      function() {
        webHelpDyslexia.style.cache.font_style = "normal";
        webHelpDyslexia.style.addStylesheetRules();
      })
     .css('background-image', 'url(' + chrome.extension.getURL('icons/remove-italic.svg')  + ')');


  var bold_button = $("<div>", {
      id: 'webHelpDyslexia-bold-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover texto em negrito'
    })
    .click(
      function() {
        webHelpDyslexia.style.cache.font_weight = "normal";
        webHelpDyslexia.style.addStylesheetRules();
      })
      .css('background-image', 'url(' + chrome.extension.getURL('icons/remove-bold.svg')  + ')');


   var underline_button = $("<div>", {
      id: 'webHelpDyslexia-underline-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover texto sublinhado'
    })
    .click(
      function() {
        webHelpDyslexia.style.cache.text_decoration = "none";
        webHelpDyslexia.style.addStylesheetRules();
      })
      .css('background-image', 'url(' + chrome.extension.getURL('icons/remove-underline.svg')  + ')');


	//var selection = "/";
	 
	var withoutlighter_button = $("<button>", {
      id: 'webHelpDyslexia-withoutlighter-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Retirar marcação'
    })
    .click(function() {

		  if (window.getSelection) { // non-IE
            userSelection = window.getSelection();
            rangeObject = userSelection.getRangeAt(0);
            if (rangeObject.startContainer == rangeObject.endContainer) {
                var x = rangeObject.startContainer.parentNode.id;
				var stylePrefix = x.split("*");
				var el = document.getElementById(x);
				var cont = el.innerHTML;
				if (userSelection.rangeCount) 
				{
					range = userSelection.getRangeAt(0);
					if(stylePrefix[0] == "webHelpDyslexia-colorir")
					{
						el.remove();
						range.insertNode(document.createTextNode(cont));
					}
				}
            } else {
               var x = getAllBetween2(
                    rangeObject.startContainer.parentNode,
                    rangeObject.endContainer.parentNode);
				var el = document.getElementById(x);
				el.remove();
            }
        } 
	 }).css('background-image', 'url(' + chrome.extension.getURL('icons/erase.svg') + ')');
			 
    var text_left_button = $("<div>", {
      id: 'webHelpDyslexia-text-left-button',
      class: 'webHelpDyslexia-button',
      title: 'Alinhar texto à esquerda'
    })
    .click(function() {
            webHelpDyslexia.style.cache.text_align = "left";
            webHelpDyslexia.style.addStylesheetRules();
         })
          .css('background-image', 'url(' +chrome.extension.getURL('icons/paragraph-left.svg')  + ')');; 

    var paragraph_spacing_button = $("<div>", {
      id: 'webHelpDyslexia-paragraph-spacing',
      class: 'webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Alinhar texto à esquerda'
    })
    .click(function() {
            webHelpDyslexia.style.cache.text_align = "left";
            webHelpDyslexia.style.addStylesheetRules();
      }); 

    var reset_button = $("<div>", {
      id: 'webHelpDyslexia-reset',
      class: 'webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover o estilo aplicado'
    })
    .click(this.reset)
    .css('background-image', 'url(' + chrome.extension.getURL('icons/undo.svg')  + ')');;

    var moverVertical_button = $("<div>", {
      id: 'webHelpDyslexia-move-vertical',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-button-right',
      title: 'Mover o plugin para baixo'
    })
    .click(this.togglePosition);

       // Botão para fechar o plugin
    var close_button = $("<div>", {
      id: 'webHelpDyslexia-close',
      class: 'webHelpDyslexia-button webHelpDyslexia-button-right',
      title: 'Fechar'
    })
    .click(webHelpDyslexia.close);


    var color = $("<div>", {
      id: 'webHelpDyslexia-font-color',
      title: 'Cor do texto'
    });

     self.extension.font_section = $("<section>", {
      id: 'webHelpDyslexia-section-font',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createFontSizeControl())
    .append(widgetUI.createFontFamilyControl());

    self.extension.color_section = $("<section>", {
      id: 'webHelpDyslexia-section-color',
      class: 'webHelpDyslexia-control-set'
    })
	
    .append(bold_button)
    .append(italic_button)
    .append(underline_button)
    .append(widgetUI.createFontColorControl())
    .append(widgetUI.createBackgroundColorControl());

     self.extension.align_section = $("<section>", {
      id: 'webHelpDyslexia-section-align',
      class: 'webHelpDyslexia-control-set'
    })
    .append(text_left_button);

    self.extension.spacing_section = $("<section>", {
      id: 'webHelpDyslexia-section-spacing',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createParagraphSpacingControl())
    .append(widgetUI.createLineHeightControl())
    .append(widgetUI.createLetterSpacingControl())
    .append(widgetUI.createTextWidthControl());

    self.extension.highlight_section = $("<section>", {
      id: 'webHelpDyslexia-section-highlight',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createLighterControl())
    .append(withoutlighter_button);
   
    self.extension.readingTools_section = $("<section>", {
      id: 'webHelpDyslexia-section-tools',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createDictionary())
    .append(widgetUI.createRulerControl());

    self.extension.reset_section = $("<section>", {
      id: 'webHelpDyslexia-section-reset',
      class: 'webHelpDyslexia-control-set'
    })
    .append(reset_button);

    self.extension.container.appendTo(self.extension.box)
    .append(close_button)
    .append(moverVertical_button)
    .append(self.extension.font_section)
    .append(self.extension.color_section)
    .append(self.extension.align_section)
    .append(self.extension.spacing_section)
    .append(self.extension.highlight_section)
    .append(self.extension.readingTools_section)
    .append(self.extension.reset_section);

    this.setMargin("top");
  },

  // Abre o widget
  open: function(){
    if(!this.extension.box)
      this.create();
  },

  //  Fecha o plugin
  close: function() {
    this.removeMargin(webHelpDyslexia.options.position);
    this.extension.box.hide();
  },

  // Reabre o plugin
  reopen: function() {
    this.setMargin(webHelpDyslexia.options.position);
    this.extension.box.show();
    console.log("Reabrindo...")
  },

  // Remove as alterações realizadas pelo plugin
  reset: function (){
    webHelpDyslexia.style.removeStylesheetRules();
    removeHighLithAndScreens();
  },
 
  // Adiciona a margem no body, para o plugin não sobrepor a página
  setMargin: function (position) {
    if(position  == "top"){
      $("body").removeClass("body-webHelpDyslexia-bottom");
      $("body").addClass("body-webHelpDyslexia-top");
    } else {
      $("body").removeClass("body-webHelpDyslexia-top");
      $("body").addClass("body-webHelpDyslexia-bottom");
    }
  },

  // Remove a margin no body
  removeMargin: function (position) {
    if(position  == "bottom"){
      $("body").removeClass("body-webHelpDyslexia-bottom");
    } else {
      $("body").removeClass("body-webHelpDyslexia-top");
    }
  },


  // Move o plugin verticalmente
  togglePosition: function() {
    var pos = webHelpDyslexia.options.position;

    if (pos === 'bottom') {
      pos = 'top';

      // remove a ediciona as classes que setam as margens da página para o plugin não sobrepor
      $('#webHelpDyslexia-box')
      .removeClass('webHelpDyslexia-bottom')
      .addClass('webHelpDyslexia-top');

      //$("body").attr('style',"margin-top: 30px !important; margin-bottom: 0");
      
      $('#webHelpDyslexia-move-vertical').attr('title','Mover o plugin para baixo');

    }
    else {
      pos = 'bottom';

      // remove e adicona as classes de posicionamento do plugin
      $('#webHelpDyslexia-box')
      .removeClass('webHelpDyslexia-top')
      .addClass('webHelpDyslexia-bottom');

      $('#webHelpDyslexia-move-vertical').attr('title','Mover o plugin para cima');


      //$("body").attr('style',"margin-top: 0; margin-bottom: 30px !important");
    }

    webHelpDyslexia.widget.setMargin(pos);
    webHelpDyslexia.options.position = pos;
  }

};
