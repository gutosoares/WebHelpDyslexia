var tam = 0;
var controlid = 0;
$(document).keyup(function(e) {
	if (e.keyCode == 27)
	{
	  //$("#chromexia-blackUper").remove();
	  //$("#chromexia-blackBotton").remove();
	  //$("#chromexia-select-reader-size").val('');
	  //$("#chromexia-text").remove();
	  removeElements();
	}
});
		
$(document).bind('mousemove', function(e){
  $('#chromexia-tail').css({
	 top:   e.pageY - 1000
  });
  $('#chromexia-blackUper').css({
	 top:   e.pageY - (2010 + tam)
  });
  $('#chromexia-blackBotton').css({
	 top:   e.pageY +12
  });
  
 // $('#chromexia-text').css({
	// top:   e.pageY -100,
	// left:  e.pageX
  //});
}); 

function replaceSelectionWithNode(node) 
{
	var range, html;
	if (window.getSelection && window.getSelection().getRangeAt) {
		range = window.getSelection().getRangeAt(0);
		range.deleteContents();
		range.insertNode(node);
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		html = (node.nodeType == 3) ? node.data : node.outerHTML;
		range.pasteHTML(html);
	}
}

function parseJSON(data) {
    return window.JSON && window.JSON.parse ? window.JSON.parse( data ) : (new Function("return " + data))(); 
}

function getAllBetween2(firstEl,lastEl)
{
	var firstElement = $(firstEl); // First Element
	var lastElement = $(lastEl); // Last Element
	var collection = new Array(); // Collection of Elements
	collection.push(firstElement.attr('id')); // Add First Element to Collection
	$(firstEl).nextAll().each(function(){ // Traverse all siblings
		var siblingID  = $(this).attr('id'); // Get Sibling ID
		if (siblingID != $(lastElement).attr('id')) { // If Sib is not LastElement
			collection.push($(this).attr('id')); // Add Sibling to Collection
		} else { // Else, if Sib is LastElement
			collection.push(lastElement.attr('id')); // Add Last Element to Collection
			return false; // Break Loop
		}
	});         
	return collection; // Return Collection
}

  //remove janela e marcações
 function removeHighLithAndScreens ()
 {
	var aux = parseInt(controlid);
	$("#chromexia-blackUper").remove();
    $("#chromexia-blackBotton").remove();
    $("#chromexia-select-reader-size").val('');
    $("#chromexia-text").remove();
	while(aux != 0)
	{
		var el = document.getElementById('chromexia-colorir'+controlid);
		var cont = el.innerHTML;
		$('#chromexia-colorir'+controlid).replaceWith(cont);
		aux = aux - 1;
		controlid = aux.toString();
	}
 }
 
 function removeElements ()
 {
	$("#chromexia-blackUper").remove();
	$("#chromexia-blackBotton").remove();
	$("#chromexia-select-reader-size").val('');
	$("#chromexia-text").remove();
 }
