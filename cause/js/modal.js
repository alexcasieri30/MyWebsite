
$(document).ready(function(){

	$("#donateButton1").click(function(){
		console.log("Donation Being made!");
		var foundation = document.getElementById("modalTitle1").textContent;
		var email = $("#email_textbox_1").val()
		var donation = $("#donation_textbox_1").val();
		// console.log(foundation);
		alert(email + " has donated " + donation + " to " + foundation);
	});
	$("#donateButton2").click(function(){
		console.log("Donation being made!");
		var foundation2 = document.getElementById("modalTitle2").textContent;
		var email = $("#email_textbox_2").val();
		var donation = $("#donation_textbox_2").val();
		alert(email + " has donated " + donation + " to " + foundation2);
	})
	$("#donateButton3").click(function(){
		console.log("Donation being made!");
		var foundation3 = document.getElementById("modalTitle3").textContent;
		var email = $("#email_textbox_3").val();
		var donation = $("#donation_textbox_3").val();
		alert(email + " has donated " + donation + " to " + foundation3);
	})

	var myCount = setInterval( function(){
		$("h3").css("font-size","50pt");

	}, 2000);


});