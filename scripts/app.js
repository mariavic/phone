$(document).ready(function() {
	$('.number').on('click', function() {
		var singleNumber = document.createElement('span');
		var num = $(this).html();
		var span = $(singleNumber).html(num);
		$('.display').append(span);

		//erase
		$('#erase').on('click', function() {
			$('.display span').last().empty();
		});
	});	
});