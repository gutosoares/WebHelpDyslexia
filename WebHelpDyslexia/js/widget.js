/**
*
*   @requires jQuery
*
**/

webHelpDyslexia.widget = {
  
  // Armazena os principais elementos da estrutura do plugin
  cache: {
    box: null,
    container: null,
    font_section: null,
    color_section: null,
    align_section: null,
    spacing_section: null,
    reset_section: null
  },

  //Cria a interface de usuário
  create: function(){
    var self = webHelpDyslexia.widget;

    // div que que contém o plugin
    self.cache.box = $("<div>", {
      id: 'webHelpDyslexia-box',
      class: 'webHelpDyslexia-top'
    })
    .appendTo(document.body);

    self.cache.container = $("<div>", {
      id: 'webHelpDyslexia-container'
    });

    var italic_button = $("<div>", {
      id: 'webHelpDyslexia-italic-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover itálico'
    })
    .click(function() {
            webHelpDyslexia.style.cache.font_style = "normal";
            webHelpDyslexia.style.addStylesheetRules();
          });

	var test_button = $("<button>", {
      id: 'webHelpDyslexia-test-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Busca por sinônimos'
    })
	.click(function() {

			var selection = window.getSelection();
            var param = selection.toString();
			//var responseContainer = document.getElementById('response');
			var request = new XMLHttpRequest();
		    //request.open("get", "http://localhost:59862/api/values/"+param, false);
			request.open("get", "http://dicionario.azurewebsites.net/api/values/"+param, false);
			request.send();
			removeElements();
			div = $("<div id='webHelpDyslexia-text'>");
			$("body").prepend(div);
			//texto = $("<p id='meup'>");
			//$("#webHelpDyslexia-text").prepend(texto);
			//$("#meup").text(request.responseText);
			var t = request.responseText;
			var te = t.replace(/"/g, "");
			te = te.replace(/#/g, '"');
			var text = '{"name":"John"}';
			var obj = parseJSON(te);
			var busca = $("<p id='titulo'>");
			var ul = $('<ul>');
			$("#webHelpDyslexia-text").prepend(ul);
			$(obj.sinonimos).each(function(index, item){
				ul.append(
					$(document.createElement('li')).text(item)
				);
			});
			$("#webHelpDyslexia-text").prepend(busca);
			$("#titulo").text(obj.chave);
			
			//div = $("<div id='webHelpDyslexia-text'>");
			//dv2 = $("<div id='webHelpDyslexia-floatdiv'>");
			//$("body").prepend(div);
			//$("webHelpDyslexia-text").prepend(div2);
			//texto = $("<p id='webHelpDyslexia-ptext'>");
			//$("#webHelpDyslexia-floatdiv").prepend(texto);
			//$("#webHelpDyslexia-ptext").text(request.responseText);
			
	 }); 
	 
	var reader_button1 = $("<div>", {
      id: 'webHelpDyslexia-reader-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Leitor'
    })
    .click(function() {
            //div = $("<div id='webHelpDyslexia-tail'>");
			//$("body").prepend(div);
			//div2 = $("<div id='webHelpDyslexia-black'>");
			//$("#webHelpDyslexia-tail").prepend(div2);
			//div3 = $("<div id='webHelpDyslexia-center'>");
			//$("#webHelpDyslexia-tail").prepend(div3);
			//div4 = $("<div id='webHelpDyslexia-black'>");
			//$("#webHelpDyslexia-tail").prepend(div4);
			removeElements();
			var divUpper = $("<div id='webHelpDyslexia-blackUper'>");
			var divBottton = $("<div id='webHelpDyslexia-blackBotton'>");
			$("body").prepend(divUpper);
			$("body").prepend(divBottton);
         });
	
	var reader_button = $('<select>', {
      id: 'webHelpDyslexia-select-reader-size',
      class: 'webHelpDyslexia-select',
      title: 'Régua de Leitura'
    })
    .change(function() {
            //div = $("<div id='webHelpDyslexia-tail'>");
			//$("body").prepend(div);
			//div2 = $("<div id='webHelpDyslexia-black'>");
			//$("#webHelpDyslexia-tail").prepend(div2);
			//div3 = $("<div id='webHelpDyslexia-center'>");
			//$("#webHelpDyslexia-tail").prepend(div3);
			//div4 = $("<div id='webHelpDyslexia-black'>");
			//$("#webHelpDyslexia-tail").prepend(div4);
			if(!document.getElementById('webHelpDyslexia-blackUper'))
			{
				var divUpper = $("<div id='webHelpDyslexia-blackUper'>");
				var divBottton = $("<div id='webHelpDyslexia-blackBotton'>");
			}
			sel = $(this).find('option:selected').val();
			tam = parseInt(sel);
			$("body").prepend(divUpper);
			$("body").prepend(divBottton);
         });
	
	var data = {
		'nulo': '',
		'pequeno': 0,
		'médio': 50,
		'grande': 100
	}
	
	for(var val in data) {
		$('<option />', {value: data[val], text: val}).appendTo(reader_button);
	}
	
	var lighter_button = $("<button>", {
      id: 'webHelpDyslexia-lighter-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Marcar Texto'
    })
    .click(function() {
            var selection = window.getSelection();
            var el = document.createElement("j");
            el.setAttribute("id", "webHelpDyslexia-colorir");
            el.appendChild(document.createTextNode(selection.toString()));
            replaceSelectionWithNode(el);
         });
	 
	 var selection = "/";
	 
	var withoutlighter_button = $("<button>", {
      id: 'webHelpDyslexia-withoutlighter-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Retirar marcação'
    })
    .click(function() {
		/*var sel, range;
		if (window.getSelection) 
		{
			sel = window.getSelection();
			selection = selection+sel;
			alert(selection);
			alert(sel);
			if (sel.rangeCount) 
			{
				range = sel.getRangeAt(0);
				range.deleteContents();
				range.insertNode(document.createTextNode(selection));
				alert(selection);
			}
		}*/
		
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
	 });
			 
		
    var bold_button = $("<div>", {
      id: 'webHelpDyslexia-bold-button',
      class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
      title: 'Remover negrito'
    })
    .click(function() {
            webHelpDyslexia.style.cache.font_weight = "normal";
            webHelpDyslexia.style.addStylesheetRules();
         });

    var text_left_button = $("<div>", {
      id: 'webHelpDyslexia-text-left-button',
      class: 'webHelpDyslexia-button',
      title: 'Alinhar texto à esquerda'
    })
    .click(function() {
            webHelpDyslexia.style.cache.text_align = "left";
            webHelpDyslexia.style.addStylesheetRules();
         }); 

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
    .click(this.reset);

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

     self.cache.font_section = $("<section>", {
      id: 'webHelpDyslexia-section-font',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createFontSizeControl())
    .append(widgetUI.createFontFamilyControl());

    self.cache.color_section = $("<section>", {
      id: 'webHelpDyslexia-section-color',
      class: 'webHelpDyslexia-control-set'
    })
	
    .append(bold_button)
    .append(italic_button)
    .append(widgetUI.createFontColorControl())
    .append(widgetUI.createBackgroundColorControl());

     self.cache.align_section = $("<section>", {
      id: 'webHelpDyslexia-section-align',
      class: 'webHelpDyslexia-control-set'
    })
    .append(text_left_button);

    self.cache.spacing_section = $("<section>", {
      id: 'webHelpDyslexia-section-align',
      class: 'webHelpDyslexia-control-set'
    })
    .append(widgetUI.createParagraphSpacingControl())
    .append(widgetUI.createLineHeightControl())
    .append(widgetUI.createLetterSpacingControl())
    .append(widgetUI.createTextWidthControl());

    self.cachereset_section = $("<section>", {
      id: 'webHelpDyslexia-section-reset',
      class: 'webHelpDyslexia-control-set'
    })
		
	.append(test_button)
	.append(reader_button)
	.append(widgetUI.createLighterControl())
	//.append(lighter_button)
	.append(withoutlighter_button)
    .append(reset_button);

    self.cache.container.appendTo(self.cache.box)
    .append(close_button)
    .append(moverVertical_button)
    .append(self.cache.font_section)
    .append(self.cache.color_section)
    .append(self.cache.align_section)
    .append(self.cache.spacing_section)
    .append(self.cachereset_section);

    this.setMargin("top");
  },

  // Abre o widget
  open: function(){
    if(!this.cache.box)
      this.create();
  },

  //  Fecha o plugin
  close: function() {
    this.removeMargin(webHelpDyslexia.options.position);
    this.cache.box.hide();
  },

  // Reabre o plugin
  reopen: function() {
    this.setMargin(webHelpDyslexia.options.position);
    this.cache.box.show();
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
