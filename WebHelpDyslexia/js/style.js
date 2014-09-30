/**
* Cria e aplica o css na página
**/

webHelpDyslexia.style = {

    // Amarmazena os valores de cada elemento do css
    cache: {
      fontSize: null,
      font_family: null,
      font_color: null,
      background_color: null,
      font_style: null,
      font_weight: null,
      text_align: null,
      line_height: null,
      letter_spacing: null,
      text_width: null,
      text_decoration: null,
      paragraph_spacing: null
    },


  /**
  * O Chrome não aceita o path de cada recurso
  * é necessário criar a url de cada fonte.
  */
  URLfonts: {
    arial: chrome.extension.getURL("css/fonts/arial.ttf"),

    comic_sans: chrome.extension.getURL("css/fonts/comic-sans.ttf"),

    georgia: chrome.extension.getURL("css/fonts/georgia.ttf"),

    open_dislexic: chrome.extension.getURL("css/fonts/open-dyslexic.ttf"),

    tahoma: chrome.extension.getURL("css/fonts/tahoma.ttf"),

    trebuchet: chrome.extension.getURL("css/fonts/trebuchet.ttf"),

    verdana: chrome.extension.getURL("css/fonts/verdana.ttf")
  },

  /**
  * Coloca null em todos os elementos de cache.
  */
  reset: function (){
    for (var key in this.cache) {
      this.cache[key] = null;
    }
  },

  // Remove a tag <style> que é adicionado o estilo
  removeStylesheetRules: function(){
    this.reset();
    $("#injectCSSwebHelpDyslexia").remove();
  },


  // Retorna o caminho relativo das fontes utilizandas
  font: function(font_name){
    switch(font_name){
      case 'Arial':
        return this.URLfonts.arial;

      case 'Open Dyslexic':
        return  this.URLfonts.open_dislexic;

      case 'Comic Sans':
        return  this.URLfonts.comic_sans;

      case 'Verdana':
        return this.URLfonts.verdana;

      case 'Georgia':
        return this.URLfonts.georgia;

      case 'Tahoma':
        return this.URLfonts.tahoma;

      case 'Trebuchet MS':
        return this.URLfonts.trebuchet;

      default:
        return "Fonte não encontrada";
    }
  },


// seta o tamanho da coluna. 
//multiplica o tamanho da fonte por 30, o resultado é aproximadamente 6 caracteres
// ex. fonte de 12px. tamanho da linha = 12 * 30
  textWidth: function(opt, fontSize){
    switch(opt){
      case 'pequeno':
        return fontSize*23;

      case 'médio':
        return  fontSize*33;

      case 'grande':
        return  fontSize*39;

      default:
        return "null";
    }
  },

  letterSpacing: function(opt, fontSize){
    switch(opt){
      case 'normal':
        return 0;

      case 'médio':
        return  fontSize*0.07;

      case 'grande':
        return  fontSize*0.14;

      default:
        return "null";
    }
  },



  /**TODO: Criar um método genérico para inserir o css de maneira mais elegante 
    * O método deve inserir somente as regras inseridas pelo usuário
    */

  /**
    * Gera e insere as regras
    */
  addStylesheetRules: function () {
    //$("#injectCSSContainer").remove();

    var font_size_h1 = null;
    var font_size_h2 = null;
    var font_size_h3 = null;
    var font_size_h4 = null;
    var font_size_h5 = null;
    var font_size_h6 = null;

    var font_size_p = null;

    var line_height = null;

    var default_value = null;
    var padding_bottom = null;


    var textWidth = null;
    var marginTextWidth = null;
    var paddingTextWidth = null;

    var ComputedFontSize = $("p").css("font-size").replace('px','');

    var letterSpacing = null;

    // espaçamento entre caracteres
    if(this.cache.letter_spacing !== null){
      letterSpacing = this.letterSpacing(this.cache.letter_spacing, ComputedFontSize);
    }

   // largura da coluna
    if(this.cache.text_width !== null){
      textWidth = this.textWidth(this.cache.text_width, ComputedFontSize);
      marginTextWidth = "auto";
      paddingTextWidth = "0 !important";
    }

    
    // Adiciona tamanhos proporcionais para os elementos
    if(this.cache.fontSize !== null){
      font_size_h1 = this.cache.fontSize*2.1 +"pt !important";
      font_size_h2 = this.cache.fontSize*1.9 +"pt !important";
      font_size_h3 = this.cache.fontSize*1.7 +"pt !important";
      font_size_h4 = this.cache.fontSize*1.5 +"pt !important";
      font_size_h5 = this.cache.fontSize*1.3 +"pt !important";
      font_size_h6 = this.cache.fontSize*1.1 +"pt !important";
      font_size_p  = this.cache.fontSize +"pt !important";

      // Espaçamento entre linhas default 
      line_height = 1.4 +"!important";

      //adapta o tamanho da coluna ao tamanho da fonte escolhida
      if(this.cache.text_width !== null){
        textWidth = this.textWidth(this.cache.text_width, this.cache.fontSize*1.35);
        marginTextWidth = "auto";
        paddingTextWidth = "0 !important";
      }

      //adapta o espaçamento entre caracteres ao tamanho da fonte escolhida
      if(this.cache.letter_spacing !== null){
        letterSpacing = this.letterSpacing(this.cache.letter_spacing, this.cache.fontSize*1.35);
      }
    }

    if (this.cache.line_height !== null){
      line_height  = this.cache.line_height + " !important";
    }

    //Adicona o tipo de fonte. 
    var fontType = null;

    if(this.cache.font_family !== null){
      fontType = this.cache.font_family + ", sans-serif !important";
    }

    if(this.cache.paragraph_spacing !== null){
      default_value = 0 + " !important";
      padding_bottom = this.cache.paragraph_spacing * ComputedFontSize + "px !important";
    }

    if(this.cache.font_color !== null){
      this.cache.text_decoration = "underline !important";
    }

    //Responsável por remover e adicionar o estilo à página
    $.injectCSS({
          '*': {
                  background_color: this.cache.background_color + " !important",
                  color: this.cache.font_color  + " !important",
                  font_family: fontType,
                  font_style: this.cache.font_style + " !important",
                  font_weight: this.cache.font_weight + " !important",
                  letter_spacing: letterSpacing + "px !important"
              },
          "h1, h1 a": {
                font_size: font_size_h1,
                line_height: line_height
              },
          "h2, h2 a": {
                  font_size: font_size_h2,
                  line_height: line_height
              },
          "h3, h3 a": {
                  font_size: font_size_h3,
                  line_height: line_height
              },
          "h4, h4 a": {
                  font_size: font_size_h4,
                  line_height: line_height
              },
          "h5, h5 a": {
                  font_size: font_size_h5,
                  line_height: line_height
              },
          "h6, h6 a": {
                  font_size: font_size_h6,
                  line_height: line_height
              },
          "h1, h2, h3, p": {
                  max_width: textWidth + "px !important",
                  padding_left: paddingTextWidth,
                  padding_right: paddingTextWidth,
                  margin: marginTextWidth
              },
           "p": {
                  font_size: font_size_p,
                  line_height: line_height,
                  text_align: this.cache.text_align +" !important",
                  padding_bottom: padding_bottom,
                  padding_top: default_value,
                  margin_top: default_value,
                  margin_bottom: default_value
              },
          '@font-face': {
                  font_family: this.cache.font_family,
                  src: 'url(' + this.font(this.cache.font_family) + ')'
              },
            'a':{
                  text_decoration: this.cache.text_decoration
              }
          },

          {  
              truncateFirst: true,
              containerName: "injectCSSwebHelpDyslexia"
          });
      

    var fontSize = $("p").css("font-size");

    var lineHeight = $("p").css("line-height");

    var width = $("p").css("width");

  }
};


