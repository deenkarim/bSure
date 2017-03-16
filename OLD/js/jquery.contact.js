$.validator.setDefaults({
	submitHandler: function() {
	
		$('#contactForm').append('<div id="loader" style="margin:10px"></div>');
		$('#loader').empty().append("<img src='img/loader.gif' />");
					
		var name = $("#name").val();  
		var email = $("#email").val(); 
		var message = $("#message").val(); 
						
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;  
					
			$.ajax({
										 
			url: "mail.php",
			data: dataString,
			type: "GET",
			success: function(responseText) {
				$('#loader').empty()
					$('#contactForm').append('<h3>'+ responseText + '</h3>');
						
					}
			});
	}
});

		
$(document).ready(function(){								 
  $("#contactForm").validate();
});