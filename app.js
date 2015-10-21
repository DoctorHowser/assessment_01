$(document).ready(function(){
	var clicks = 0;
	

	$('#generate').on('click', function(){
		clicks++;
		var el = 	"<div class='box'>" +
				"<button class='changeButton'>Change</button>" +
				"<button class='removeButton'>Delete</button>" +
				"<p>Clicks: "+ clicks + "</p>"
			"</div>";
		
		console.log(clicks);
		$('#container').append(el);
	})

	$('#container').on('click', '.changeButton', function(){
		$(this).closest('.box').toggleClass('red');
	})

	$('#container').on('click', '.removeButton', function(){
		$(this).closest('.box').remove();
	})
});