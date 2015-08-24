$(function(){

		$.get('http://api.worldweatheronline.com/free/v2/weather.ashx?key=bc5d928ff57bcf4ea3ed2527e0de0&q=New%20York&num_of_days=1&tp=3&format=json', function(data){
			var temp = data.data.current_condition[0].temp_F;
			var humidity = data.data.current_condition[0].humidity;
			var rain = data.data.weather[0].hourly[0].chanceofrain;
			var sunrise = data.data.weather[0].astronomy[0].sunrise;
			var sunSet = data.data.weather[0].astronomy[0].sunset;
			$('#resultText').html("Very close! Current weather conditions are:<br><br> Current Temperature: "+ temp+'°F<br>'+' Humidity: '+humidity+'%<br>'+' Chance of rain: '+rain+'%'+'<br>'+' Sunrise: '+sunrise+'<br>'+' Sunset: '+sunSet);
			}, 'json');
});