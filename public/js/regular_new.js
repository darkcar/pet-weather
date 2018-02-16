$(function(){
	// generate dog breed list
	var dog_breed = ['German Shepherd', 'Labrador Retriever', 'Rottweiler', 'beagle', 'bulldog', 'Other'];
	var cat_breed = ['British Shorthair', 'Siamese cat', 'Persian cat', 'Ragdoll', 'Maine Coon', 'Other'];
	
	$('#pet_type').change(function(event) {
		if($('#pet_type').val() == 'Dog') {
			$('#pet_breed option').remove();
			var optionHtml = '';
			for(var i = 0; i < dog_breed.length; i ++) {
				optionHtml += '<option value="' + dog_breed[i] + '">' + dog_breed[i] + '</option>';
			}
			$('#pet_breed').append(optionHtml);
		} else if ($('#pet_type').val() == 'Cat') {
			$('#pet_breed option').remove();
			var optionHtml = '';
			for(var i = 0; i < cat_breed.length; i ++) {
				optionHtml += '<option value="' + cat_breed[i] + '">' + cat_breed[i] + '</option>';
			}
			$('#pet_breed').append(optionHtml);
		} else if($('#pet_type').val() == 'Other') {
			$('#pet_breed option').remove();
			$('#pet_breed').append('<option value="Other">Other</option>');
		}
	});

	$('#location').blur(function(event) {
		var pet_location = $('#location').val();
		if(pet_location != '') {
			pet_location = pet_location.replace(' ', '+');
			$.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ pet_location +'&key=AIzaSyCumligewjm7l1lsu3gw2QtF9W0-NEn6Sg', function(data){
				if(data['status'] == 'OK') {
					var lat = data['results'][0]["geometry"]["location"]["lat"];
					var long = data['results'][0]["geometry"]["location"]["lng"];
					$('#latitude').val(lat);
					$('#longitude').val(long); 
				}
			});
		} 
	});
});