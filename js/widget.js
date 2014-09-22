/**
*
*   @requires jQuery
*
**/

chromexia.widget = {
  
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
    var self = chromexia.widget;

    // div que que contém o plugin
    self.cache.box = $("<div>", {
      id: 'chromexia-box',
      class: 'chromexia-top'
    })
    .appendTo(document.body);

    self.cache.container = $("<div>", {
      id: 'chromexia-container'
    });

    var italic_button = $("<div>", {
      id: 'chromexia-italic-button',
      class: 'chromexia-control chromexia-button chromexia-left',
      title: 'Remover itálico'
    })
    .click(function() {
            chromexia.style.cache.font_style = "normal";
            chromexia.style.addStylesheetRules();
          });

	var test_button = $("<button>", {
      id: 'chromexia-test-button',
      class: 'chromexia-control chromexia-button chromexia-left',
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
			div = $("<div id='chromexia-text'>");
			$("body").prepend(div);
			//texto = $("<p id='meup'>");
			//$("#chromexia-text").prepend(texto);
			//$("#meup").text(request.responseText);
			var t = request.responseText;
			var te = t.replace(/"/g, "");
			te = te.replace(/#/g, '"');
			var text = '{"name":"John"}';
			var obj = parseJSON(te);
			var busca = $("<p id='titulo'>");
			var ul = $('<ul>');
			$("#chromexia-text").prepend(ul);
			$(obj.sinonimos).each(function(index, item){
				ul.append(
					$(document.createElement('li')).text(item)
				);
			});
			$("#chromexia-text").prepend(busca);
			$("#titulo").text(obj.chave);
			
			//div = $("<div id='chromexia-text'>");
			//dv2 = $("<div id='chromexia-floatdiv'>");
			//$("body").prepend(div);
			//$("chromexia-text").prepend(div2);
			//texto = $("<p id='chromexia-ptext'>");
			//$("#chromexia-floatdiv").prepend(texto);
			//$("#chromexia-ptext").text(request.responseText);
			
	 }); 
	 
	var reader_button1 = $("<div>", {
      id: 'chromexia-reader-button',
      class: 'chromexia-control chromexia-button chromexia-left',
      title: 'Leitor'
    })
    .click(function() {
            //div = $("<div id='chromexia-tail'>");
			//$("body").prepend(div);
			//div2 = $("<div id='chromexia-black'>");
			//$("#chromexia-tail").prepend(div2);
			//div3 = $("<div id='chromexia-center'>");
			//$("#chromexia-tail").prepend(div3);
			//div4 = $("<div id='chromexia-black'>");
			//$("#chromexia-tail").prepend(div4);
			removeElements();
			var divUpper = $("<div id='chromexia-blackUper'>");
			var divBottton = $("<div id='chromexia-blackBotton'>");
			$("body").prepend(divUpper);
			$("body").prepend(divBottton);
         });
	
	var reader_button = $('<select>', {
      id: 'chromexia-select-reader-size',
      class: 'chromexia-select',
      title: 'Régua de Leitura'
    })
    .change(function() {
            //div = $("<div id='chromexia-tail'>");
			//$("body").prepend(div);
			//div2 = $("<div id='chromexia-black'>");
			//$("#chromexia-tail").prepend(div2);
			//div3 = $("<div id='chromexia-center'>");
			//$("#chromexia-tail").prepend(div3);
			//div4 = $("<div id='chromexia-black'>");
			//$("#chromexia-tail").prepend(div4);
			if(!document.getElementById('chromexia-blackUper'))
			{
				var divUpper = $("<div id='chromexia-blackUper'>");
				var divBottton = $("<div id='chromexia-blackBotton'>");
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
      id: 'chromexia-lighter-button',
      class: 'chromexia-control chromexia-button chromexia-left',
      title: 'Marcar Texto'
    })
    .click(function() {
            var selection = window.getSelection();
            var el = document.createElement("j");
            el.setAttribute("id", "chromexia-colorir");
            el.appendChild(document.createTextNode(selection.toString()));
            replaceSelectionWithNode(el);
         });
	 
	 var selection = "/";
	 
	var withoutlighter_button = $("<button>", {
      id: 'chromexia-withoutlighter-button',
      class: 'chromexia-control chromexia-button chromexia-left',
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
					if(stylePrefix[0] == "chromexia-colorir")
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
      id: 'chromexia-bold-button',
      class: 'chromexia-control chromexia-button chromexia-left',
      title: 'Remover negrito'
    })
    .click(function() {
            chromexia.style.cache.font_weight = "normal";
            chromexia.style.addStylesheetRules();
         });

    var text_left_button = $("<div>", {
      id: 'chromexia-text-left-button',
      class: 'chromexia-button',
      title: 'Alinhar texto à esquerda'
    })
    .click(function() {
            chromexia.style.cache.text_align = "left";
            chromexia.style.addStylesheetRules();
         }); 

    var paragraph_spacing_button = $("<div>", {
      id: 'chromexia-paragraph-spacing',
      class: 'chromexia-button chromexia-left',
      title: 'Alinhar texto à esquerda'
    })
    .click(function() {
            chromexia.style.cache.text_align = "left";
            chromexia.style.addStylesheetRules();
      }); 


    var reset_button = $("<div>", {
      id: 'chromexia-reset',
      class: 'chromexia-button chromexia-left',
      title: 'Remover o estilo aplicado'
    })
    .click(this.reset);

    var moverVertical_button = $("<div>", {
      id: 'chromexia-move-vertical',
      class: 'chromexia-control chromexia-button chromexia-button-right',
      title: 'Mover o plugin para baixo'
    })
    .click(this.togglePosition);

       // Botão para fechar o plugin
    var close_button = $("<div>", {
      id: 'chromexia-close',
      class: 'chromexia-button chromexia-button-right',
      title: 'Fechar'
    })
    .click(chromexia.close);


    var color = $("<div>", {
      id: 'chromexia-font-color',
      title: 'Cor do texto'
    });

     self.cache.font_section = $("<section>", {
      id: 'chromexia-section-font',
      class: 'chromexia-control-set'
    })
    .append(widgetUI.createFontSizeControl())
    .append(widgetUI.createFontFamilyControl());

    self.cache.color_section = $("<section>", {
      id: 'chromexia-section-color',
      class: 'chromexia-control-set'
    })
	
    .append(bold_button)
    .append(italic_button)
    .append(widgetUI.createFontColorControl())
    .append(widgetUI.createBackgroundColorControl());

     self.cache.align_section = $("<section>", {
      id: 'chromexia-section-align',
      class: 'chromexia-control-set'
    })
    .append(text_left_button);

    self.cache.spacing_section = $("<section>", {
      id: 'chromexia-section-align',
      class: 'chromexia-control-set'
    })
    .append(widgetUI.createParagraphSpacingControl())
    .append(widgetUI.createLineHeightControl())
    .append(widgetUI.createLetterSpacingControl())
    .append(widgetUI.createTextWidthControl());

    self.cachereset_section = $("<section>", {
      id: 'chromexia-section-reset',
      class: 'chromexia-control-set'
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
    this.removeMargin(chromexia.options.position);
    this.cache.box.hide();
  },

  // Reabre o plugin
  reopen: function() {
    this.setMargin(chromexia.options.position);
    this.cache.box.show();
  },

  // Remove as alterações realizadas pelo plugin
  reset: function (){
    chromexia.style.removeStylesheetRules();
	removeHighLithAndScreens();
  },
 
  // Adiciona a margem no body, para o plugin não sobrepor a página
  setMargin: function (position) {
    if(position  == "top"){
      $("body").removeClass("body-chromexia-bottom");
      $("body").addClass("body-chromexia-top");
    } else {
      $("body").removeClass("body-chromexia-top");
      $("body").addClass("body-chromexia-bottom");
    }
  },

  // Remove a margin no body
  removeMargin: function (position) {
    if(position  == "bottom"){
      $("body").removeClass("body-chromexia-bottom");
    } else {
      $("body").removeClass("body-chromexia-top");
    }
  },


  // Move o plugin verticalmente
  togglePosition: function() {
    var pos = chromexia.options.position;

    if (pos === 'bottom') {
      pos = 'top';

      // remove a ediciona as classes que setam as margens da página para o plugin não sobrepor
      $('#chromexia-box')
      .removeClass('chromexia-bottom')
      .addClass('chromexia-top');

      //$("body").attr('style',"margin-top: 30px !important; margin-bottom: 0");
      
      $('#chromexia-move-vertical').attr('title','Mover o plugin para baixo');

    }
    else {
      pos = 'bottom';

      // remove e adicona as classes de posicionamento do plugin
      $('#chromexia-box')
      .removeClass('chromexia-top')
      .addClass('chromexia-bottom');

      $('#chromexia-move-vertical').attr('title','Mover o plugin para cima');


      //$("body").attr('style',"margin-top: 0; margin-bottom: 30px !important");
    }

    chromexia.widget.setMargin(pos);
    chromexia.options.position = pos;
  }

};
