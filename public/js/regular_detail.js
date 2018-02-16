$(function(){
	var pet_id = $.url(2);

	// get single pet 
	$.get('https://stormy-shore-87607.herokuapp.com/api/pets/' + pet_id, function(data) {
		data = JSON.parse(data);
		if(data.length == 0) {
			// no data
			$('.row').remove();
			$('<h2>404</h2>').insertBefore('footer');
		} else {
			var proxy = 'https://cors-anywhere.herokuapp.com/';
  			var apiLinkDS = 'https://api.darksky.net/forecast/4200d2356e665d5c0dc48db09f1fcfec/' + data[0]['lat'] + ',' + data[0]['long'];

  			// parse rain or not
  			var rainFlag = false;
			$.ajax({
				url: proxy + apiLinkDS,
			    success:function(weatherData) {
			    	weatherData = JSON.parse(JSON.stringify(weatherData));
			    	console.log(weatherData['currently']['summary']);
			    	if(weatherData["currently"]["icon"].indexOf('rain') != -1){
			    		rainFlag = true;
			    	} 
				}
			});

			if(rainFlag) {
				$('.pet_details_rain').show();
			} else{
				$('.pet_details_sunny').show();
			}
			$('.pet_name').html(data[0]['name']);
			$('.pet_location').html(data[0]['location']);

			// load images for dog
			$('img').attr('src', '/images/' + data[0]['breed'] + '.jpg');
			//data[0]['breed']
		}
	});
});