/**
* Cria os elementos da interface
*/

var widgetUI = {
  // constants
  VALID_FONT_SIZE: ['','12','14', '16', '18', '22', '24', '26'],
  VALID_LINE_SPACING: ['', '0.8','1','1.2','1.4','1.8'],
  VALID_TEXT_WIDTH: ['', 'normal', 'pequeno', 'médio', 'grande'],
  VALID_PARAGRAPH_SPACING: ['','0.5', '1','2','3'],
  VALID_LETTER_SPACING: ['', 'normal', 'médio', 'grande'],
  VALID_FONT_FAMYLY: ['',
                      'Fonte Padrão',
                      'Open Dyslexic',
                      'Comic Sans',
                      'Arial',
                      'Verdana',
                      'Georgia',
                      'Tahoma',
                      'Trebuchet MS'],
   VALID_RULER_SIZE: {
                      'normal': '',
                      'pequeno': 0,
                      'médio': 50,
                      'grande': 100 },

  /**
    * Create a size <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createFontSizeControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-select-font-size', 
      class: 'webHelpDyslexia-button',
      title: 'Tamanho da fonte'
    })
    .change(function() {
       webHelpDyslexia.style.cache.fontSize = $(this).val();
      console.log('letter_spacing: ' + webHelpDyslexia.style.cache.letter_spacing);
       webHelpDyslexia.style.addStylesheetRules();
    }).appendTo(container)
      .css('background-image', 'url(' + chrome.extension.getURL('icons/text-height.svg') + ')');


    var len = this.VALID_FONT_SIZE.length; 
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_FONT_SIZE[i], null, this.VALID_FONT_SIZE[i])
      .appendTo(select);
    }

    return container;
  },

   /**
    * Create a size <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createLetterSpacingControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-select-letter-spacing',
      class: 'webHelpDyslexia-button',
      title: 'Espaçamento entre caracteres'
    })
    .change(function() {
       webHelpDyslexia.style.cache.letter_spacing = $(this).val();
       console.log("LetterSpacingControl");
       webHelpDyslexia.style.addStylesheetRules();
    })
    .appendTo(container)
    .css('background-image', 'url(' +chrome.extension.getURL('icons/letter-spacing.svg')  + ')');

    var len = this.VALID_LETTER_SPACING.length;
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_LETTER_SPACING[i], null, this.VALID_LETTER_SPACING[i])
      .appendTo(select);
    }
    return container;
  },


   /**
    * Create a size <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createLineHeightControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-line-spacing',
      class: 'webHelpDyslexia-button',
      title: 'Espaçamento entre linhas'
    })
    .change(function() {
       webHelpDyslexia.style.cache.line_height = $(this).val();
       console.log(webHelpDyslexia.style.cache.line_height);
       webHelpDyslexia.style.addStylesheetRules();
    })
    .appendTo(container)
    .css('background-image', 'url(' + chrome.extension.getURL('icons/line-spacing.svg') + ')');

    var len = this.VALID_LINE_SPACING.length;
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_LINE_SPACING[i], null, this.VALID_LINE_SPACING[i])
      .appendTo(select);
    }
    return container;
  },

   /**
    * Create a size <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createParagraphSpacingControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-paragraph-spacing',
      class: 'webHelpDyslexia-button',
      title: 'Espaçamento entre parágrafos'
    })
    .change(function() {
       webHelpDyslexia.style.cache.paragraph_spacing = $(this).val();
       webHelpDyslexia.style.addStylesheetRules();
    })
    .appendTo(container)
    .css('background-image', 'url(' +chrome.extension.getURL('icons/paragraph-spacing.svg')  + ')');;

    var len = this.VALID_PARAGRAPH_SPACING.length;
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_PARAGRAPH_SPACING[i], null, this.VALID_PARAGRAPH_SPACING[i])
      .appendTo(select);
    }
    return container;
  },


  /**
    * Create a size <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createTextWidthControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-column-width',
      class: 'webHelpDyslexia-button',
      title: 'Largura do texto'
    })
    .change(function() {
       webHelpDyslexia.style.cache.text_width = $(this).val();
       webHelpDyslexia.style.addStylesheetRules();
    })
    .appendTo(container)
    .css('background-image', 'url(' + chrome.extension.getURL('icons/column-width.svg')  + ')');

    var len = this.VALID_TEXT_WIDTH.length;
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_TEXT_WIDTH[i], null, this.VALID_TEXT_WIDTH[i])
      .appendTo(select);
    }
    return container;
  },
    /**
    * Create a font family <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createFontFamilyControl: function(property) {
    var container = $('<div>',{
      class: 'webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-select-font-family',
      class: 'webHelpDyslexia-button',
      title: 'Tipo da fonte'
    })
    .change(function() {
      webHelpDyslexia.style.cache.font_family = $(this).val();
      console.log(webHelpDyslexia.style.cache.font_family);
      webHelpDyslexia.style.addStylesheetRules();
    })
     .appendTo(container)
     .css('background-image', 'url(' + chrome.extension.getURL('icons/font.svg')  + ')');

    var len = this.VALID_FONT_FAMYLY.length;
    for (var i = 0; i < len; i++) {
      this.createSelectOption(this.VALID_FONT_FAMYLY[i], null, this.VALID_FONT_FAMYLY[i])
      .appendTo(select);
    }
    return container;
  },

   /**
    * Create a font family <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    * 1c1c1c 10% grey scale
    */
  createFontColorControl: function() {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<div>', {
      id: 'webHelpDyslexia-font-color',
      class: 'webHelpDyslexia-color',
      title: 'Cor do texto'
    })
     .spectrum({
        showPaletteOnly: true,
        showPalette:true,
        showInput: true,
        preferredFormat: "hex6",
        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
            "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
            "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
            "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
            "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
            "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
            "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
            "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
            "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
            "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
            "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
            "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
            "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
        ],
        change: this.setFontColor
      })
     .appendTo(container);
     
     var select_color =  $('<div>', {
      id: 'webHelpDyslexia-set-font-color',
    })
     .css('background-image', 'url(' + chrome.extension.getURL('icons/font-color.svg')  + ')')
     .appendTo(select);
    
    return container;
  },

 /**
    * Create a font family <select> control
    * @param {string} property Property Name
    * @return {jQuery element} SELECT for size selection
    */
  createBackgroundColorControl: function() {
    var container = $('<div>',{
      class: 'webHelpDyslexia-left'
    });

    var select = $('<div>', {
      id: 'webHelpDyslexia-backgorund-color',
      class: 'webHelpDyslexia-color',
      title: 'Cor do fundo'
    })
     .spectrum({
        showPaletteOnly: true,
        showPalette:true,
        showInput: true,
        preferredFormat: "hex6",
        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
            "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
            "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
            "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
            "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
            "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
            "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
            "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
            "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
            "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
            "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
            "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
            "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
        ],
        change: this.setBackgroundColor
      })
     .appendTo(container);
     
     var select_color =  $('<div>', {
      id: 'webHelpDyslexia-set-backgorund-color',
    })
     .css('background-image', 'url(' + chrome.extension.getURL('icons/backgorund-color.svg')  + ')')
     .appendTo(select);

    return container;
  },
  
  createLighterControl: function() {
  var obj;
    var select = $('<button>', {
      id: 'webHelpDyslexia-lighter-color',
      class: 'webHelpDyslexia-color webHelpDyslexia-button',
      title: 'Marcador'
    })
    .click(function() {
      var selection = window.getSelection();

      console.log(selection.toString());

      var aux = parseInt(controlid)+1;
      controlid = aux.toString();
      obj = document.createElement("span");
      obj.setAttribute("id", "webHelpDyslexia-colorir*"+controlid);
      obj.appendChild(document.createTextNode(selection.toString()));
      replaceSelectionWithNode(obj);
      })
     .spectrum({
        showPaletteOnly: true,
        showPalette:true,
        showInput: true,
        preferredFormat: "hex6",
        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
            "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
            "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
            "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
            "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
            "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
            "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
            "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
            "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
            "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
            "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
            "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
            "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
        ],
        change: this.setLighterColor
      })
      .css('background-image', 'url(' +chrome.extension.getURL('icons/highlight.svg')  + ')');

    return select;
  },

  createDictionary: function() {
    var container = $("<button>", {
        id: 'webHelpDyslexia-test-button',
        class: 'webHelpDyslexia-control webHelpDyslexia-button webHelpDyslexia-left',
        title: 'Busca por sinônimos'
      })
      .click(function() {
        var selection = window.getSelection();
        var param = selection.toString();
        
        var request = new XMLHttpRequest();
       
        request.open("get", "http://dicionario.azurewebsites.net/api/values/"+param, false);
        request.send();
        removeElements();

        var close_button = $("<span id='fechar-dicionario'>&times;</span>")
          .click(function() {
            $( "#webHelpDyslexia-text" ).remove();
          });

        div = $("<div id='webHelpDyslexia-text'>").prepend(close_button);

        $("body").prepend(div);

        var response = request.responseText;

        response = response.replace(/"/g, "");
        response = response.replace(/#/g, '"');
        var obj = getJsonDictionary(response);
        
        var busca = $("<p id='webHelpDyslexia-dicionario-titulo'>");

        var ul = $("<ul id='webHelpDyslexia-dicionario-sinonimos'>");
        $("#webHelpDyslexia-text").prepend(ul);

        $(obj.sinonimos).each(function(index, item){
          ul.append(
            $(document.createElement('li')).text(item)
          );
        });

        /*
         * Cria o título separando a classe gramatical
         * TODO: Criar método
         */ 
        var header = obj.chave.split(",");
        var titulo = titulo = header[0];

        $("#webHelpDyslexia-text").prepend(busca);
        $("#webHelpDyslexia-dicionario-titulo").text(titulo);

    }).css('background-image', 'url(' + chrome.extension.getURL('icons/book.svg') + ')');

    function isJsonString (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

    function getJsonDictionary (response) {
      var obj;
      if(isJsonString(response)) {
        obj = parseJSON(response);
      } else {
        obj = {"chave":"Oops","sinonimos":["Selecione uma palavra para para ver os seus sinônimos."]} 
      }
      return obj;
    }

    return container;      
  },

  createRulerControl: function() {
    var container = $('<div>',{
      class: 'webHelpDyslexia-control webHelpDyslexia-left'
    });

    var select = $('<select>', {
      id: 'webHelpDyslexia-select-reader-size',
      class: 'webHelpDyslexia-button',
      title: 'Régua de Leitura'
    })
    .change (function() {

      if(!document.getElementById('webHelpDyslexia-blackUper')) {
        var divUpper = $("<div id='webHelpDyslexia-blackUper'>");
        var divBottton = $("<div id='webHelpDyslexia-blackBotton'>");
      }
      sel = $(this).find('option:selected').val();

      //Verifica se o tamanho selecionada para a régua não é vazio
      if (sel.length != 0) {
        tam = parseInt(sel);
        $("body").prepend(divUpper);
        $("body").prepend(divBottton);
      } else {
        $("#webHelpDyslexia-blackUper").remove();
        $("#webHelpDyslexia-blackBotton").remove();
      }

    }).appendTo(container)
      .css('background-image', 'url(' + chrome.extension.getURL('icons/ruler.svg') + ')');

    
    for(var val in this.VALID_RULER_SIZE) {
      $('<option />', {value: this.VALID_RULER_SIZE[val], text: val}).appendTo(select);
    }

    return container;
  },

  /**
    * Cria as opções so select
    */
  createSelectOption: function(text, property, value) {
    var option = $('<option>', {
      class: 'webHelpDyslexia-select-option',
      text: text,
      value: value,
    });

    if (property)
      option.data('property', property);
    return option;
  },

  // Modifica o plano de fundo
  setBackgroundColor: function(color) {
    webHelpDyslexia.style.cache.background_color = color.toHexString();

    // Modifica a cor da borda do ícone do plano de fundo
    $("#webHelpDyslexia-set-backgorund-color").css("border-color", color.toHexString());

     webHelpDyslexia.style.addStylesheetRules();
  },
  
  //Marca o texto com a cor selecionada
  setLighterColor: function(color) {
    var cor = color.toString();

    document.getElementById('webHelpDyslexia-colorir*'+controlid)
    .style.setProperty('background-color', cor, 'important');
  },

  // Modifica o plano de fundo
  setFontColor: function(color) {
    webHelpDyslexia.style.cache.font_color = color.toHexString();

    // Modifica a cor da borda do ícone do plano de fundo
    $("#webHelpDyslexia-set-font-color").css("border-color", color.toHexString());

     webHelpDyslexia.style.addStylesheetRules();
  }

};
