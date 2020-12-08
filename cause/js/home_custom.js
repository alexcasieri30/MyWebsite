

$(document).ready(function(){
	var count = 0
	$("#submitquote").click(function(){

		var speakerName = $("#add_speaker").val();
		var quote = '"' + $("#add_quote").val() + '"';

		if (speakerName == ""){
			alert("Enter a speaker name");
		}
		else if (quote == ""){
			alert("Enter a quote");
		}
		else{
			count = count + 1;

			$(".accordion").append("<div class='card'> <div class='card-header' id='heading" + count + "'><h2 class='mb-0'> <button class='btn btn-link btn-block text-left' type='button' data-toggle='collapse' data-target='#collapse" + count + "' aria-expanded='false' aria-controls='collapse" + count + "'>" + speakerName + "</button> </h2> </div><div id='collapse" + count + "' class='collapse' aria-labelledby='heading" + count + "' data-parent='#accordionExample'> <div class='card-body'>" + quote + " </div> </div> </div>");
			clear();
		}
		function clear(){
			document.getElementById("add_speaker").value = "";
			document.getElementById("add_quote").value = "";
			
		}
	})

})