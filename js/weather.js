/*
/ Weather forecast - Paul Brownsmith 2013
/ Data via: worldweatheronline.com
*/

/*

TODO List:

- Next 5 days weather
- store more than one location on the settings screen
- Accelerometer parallax - view-source:http://www.albertosarullo.com/demos/accelerometer/

*/

Forecast = {};

Forecast.objects = {};

Forecast.base = new (function() {

	var tempType = localStorage.getItem('tempType');

	this._weatherCodes = {
		"codes": {
			"condition": {
				
				"395": {
					"description": "Neve intensa ou leve parcial em &#65533;rea com trov&#65533;o",
					"day_icon": "wsymbol_0012_heavy_snow_showers",
					"night_icon": "wsymbol_0028_heavy_snow_showers_night"
				},
			
				"392": {
					"description": "Neve leve parcial em &#65533;rea com trov&#65533;o",
					"day_icon": "wsymbol_0016_thundery_showers",
					"night_icon": "wsymbol_0032_thundery_showers_night"
				},

				"389": {
					"description": "Chuva moderada ou forte na &#65533;rea, com trov&#65533;es",
					"day_icon": "wsymbol_0024_thunderstorms",
					"night_icon": "wsymbol_0040_thunderstorms_night"
				},
			
				"386": {
					"description": "Chuva parciais em &#65533;rea com trov&#65533;o",
					"day_icon": "wsymbol_0016_thundery_showers",
					"night_icon": "wsymbol_0032_thundery_showers_night"
				},

				"377": {
					"description": "Chuva intensa ou leve de pelotas de gelo",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"374": {
					"description": "Chuva leve de pelotas de gelo",
					"day_icon": "wsymbol_0013_sleet_showers",
					"night_icon": "wsymbol_0029_sleet_showers_night"
				},

				"371": {
					"description": "Chuva de neve intensa ou moderada",
					"day_icon": "wsymbol_0012_heavy_snow_showers",
					"night_icon": "wsymbol_0028_heavy_snow_showers_night"
				},

				"368": {
					"description": "Leve chuva de neve",
					"day_icon": "wsymbol_0011_light_snow_showers",
					"night_icon": "wsymbol_0027_light_snow_showers_night"
				},

				"365": {
					"description": "Moderada ou leve chuva de granizo",
					"day_icon": "wsymbol_0013_sleet_showers",
					"night_icon": "wsymbol_0029_sleet_showers_night"
				},

				"362": {
					"description": "Leve chuva de granizo",
					"day_icon": "wsymbol_0013_sleet_showers",
					"night_icon": "wsymbol_0029_sleet_showers_night"
				},

				"359": {
					"description": "Chuva torrencial",
					"day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
					"night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
				},

				"356": {
					"description": "Chuva moderada ou forte",
					"day_icon": "wsymbol_0010_heavy_rain_showers",
					"night_icon": "wsymbol_0026_heavy_rain_showers_night"
				},

				"353": {
					"description": "Leve chuva",
					"day_icon": "wsymbol_0009_light_rain_showers",
					"night_icon": "wsymbol_0025_light_rain_showers_night"
				},

				"350": {
					"description": "Bolas de gelo",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"338": {
					"description": "Neve intensa",
					"day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
					"night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
				},

				"335": {
					"description": "Neve intensa parcial",
					"day_icon": "wsymbol_0012_heavy_snow_showers",
					"night_icon": "wsymbol_0028_heavy_snow_showers_night"
				},

				"332": {
					"description": "Neve moderada",
					"day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
					"night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
				},

				"329": {
					"description": "Moderada neve parcial",
					"day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
					"night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
				},

				"326": {
					"description": "Leve neve",
					"day_icon": "wsymbol_0011_light_snow_showers",
					"night_icon": "wsymbol_0027_light_snow_showers_night"
				},

				"323": {
					"description": "Leve neve parcial",
					"day_icon": "wsymbol_0011_light_snow_showers",
					"night_icon": "wsymbol_0027_light_snow_showers_night"	
				},

				"320": {
					"description": "Granizo moderado ou forte",
					"day_icon": "wsymbol_0019_cloudy_with_light_snow",
					"night_icon": "wsymbol_0035_cloudy_with_light_snow_night"
				},

				"317": {
					"description": "Leve granizo",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"314": {
					"description": "Moderada ou forte chuva fria",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"311": {
					"description": "Chuva fria",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"308": {
					"description": "Chuva forte",
					"day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
					"night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
				},

				"305": {
					"description": "Chuva forte",
					"day_icon": "wsymbol_0010_heavy_rain_showers",
					"night_icon": "wsymbol_0026_heavy_rain_showers_night"
				},

				"302": {
					"description": "Chuva moderada",
					"day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
					"night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
				},

				"299": {
					"description": "Chuva moderada",
					"day_icon": "wsymbol_0010_heavy_rain_showers",
					"night_icon": "wsymbol_0026_heavy_rain_showers_night"
				},

				"296": {
					"description": "Chuva fraca",
					"day_icon": "wsymbol_0018_cloudy_with_heavy_rain",
					"night_icon": "wsymbol_0034_cloudy_with_heavy_rain_night"
				},

				"293": {
					"description": "Chuva parcial",
					"day_icon": "wsymbol_0017_cloudy_with_light_rain",
					"night_icon": "wsymbol_0033_cloudy_with_light_rain_night"
				},

				"284": {
					"description": "Chuvisco intenso frio",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"281": {
					"description": "Chuvisco frio",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"266": {
					"description": "Leve chuvisco",
					"day_icon": "wsymbol_0017_cloudy_with_light_rain",
					"night_icon": "wsymbol_0033_cloudy_with_light_rain_night"
				},

				"263": {
					"description": "Leve chuvisco nas proximidades",
					"day_icon": "wsymbol_0009_light_rain_showers",
					"night_icon": "wsymbol_0025_light_rain_showers_night"
				},

				"260": {
					"description": "Nevoeiro frio",
					"day_icon": "wsymbol_0007_fog",
					"night_icon": "wsymbol_0007_fog"
				},

				"248": {
					"description": "Nevoeiro",
					"day_icon": "wsymbol_0007_fog",
					"night_icon": "wsymbol_0007_fog"
				},

				"230": {
					"description": "Nevasca",
					"day_icon": "wsymbol_0020_cloudy_with_heavy_snow",
					"night_icon": "wsymbol_0036_cloudy_with_heavy_snow_night"
				},

				"227": {
					"description": "Sopro de neve",
					"day_icon": "wsymbol_0019_cloudy_with_light_snow",
					"night_icon": "wsymbol_0035_cloudy_with_light_snow_night"
				},

				"200": {
					"description": "Trovoadas nas proximidades",
					"day_icon": "wsymbol_0016_thundery_showers",
					"night_icon": "wsymbol_0032_thundery_showers_night"
				},

				"185": {
					"description": "Chuviscos frios parciais nas proximidades",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"182": {
					"description": "Granizo parcial nas proximidades",
					"day_icon": "wsymbol_0021_cloudy_with_sleet",
					"night_icon": "wsymbol_0037_cloudy_with_sleet_night"
				},

				"179": {
					"description": "Neve parcial nas proximidades",
					"day_icon": "wsymbol_0013_sleet_showers",
					"night_icon": "wsymbol_0029_sleet_showers_night"
				},

				"176": {
					"description": "Chuva parcial nas proximidades",
					"day_icon": "wsymbol_0009_light_rain_showers",
					"night_icon": "wsymbol_0025_light_rain_showers_night"
				},

				"143": {
					"description": "Neblina",
					"day_icon": "wsymbol_0006_mist",
					"night_icon": "wsymbol_0006_mist"
				},

				"122": {
					"description": "Encoberto",
					"day_icon": "wsymbol_0004_black_low_cloud",
					"night_icon": "wsymbol_0004_black_low_cloud"
				},

				"119": {
					"description": "Nublado",
					"day_icon": "wsymbol_0003_white_cloud",
					"night_icon": "wsymbol_0004_black_low_cloud"
				},

				"116": {
					"description": "Parcialmente nublado",
					"day_icon": "wsymbol_0002_sunny_intervals",
					"night_icon": "wsymbol_0008_clear_sky_night"
				},

				"113": {
					"description": "Claro/Ensolarado",
					"day_icon": "wsymbol_0001_sunny",
					"night_icon": "wsymbol_0008_clear_sky_night"
				},

			}

		}

	}

	this.myLocation = localStorage.getItem('myLocation');

	this.init = function() {

		// if location is not set
		if (Forecast.base.myLocation === null) {

			// location is empty, get location from geoLocation
			Forecast.objects.getGeolocation = new Forecast.getGeolocation();
            $("#panel").addClass('flip');
            document.getElementById('fundo').className='error';
           // $("#fundo").addClass('error');
            $("#showCurrentLocation").innerHTML="Não foi possível determinar sua localização.";



			// if no location - no temp type set. Set one now
			localStorage.setItem('tempType', 'C');

		}

		// if location is set
		if (Forecast.base.myLocation != null) {

			// location has a value, so display the weather for the stored location
            document.getElementById('newLocation').value=Forecast.base.myLocation;

			Forecast.objects.getData = new Forecast.getData(Forecast.base.myLocation);


		}

		// settings
		Forecast.objects.settings = new Forecast.settings();

	//	Forecast.objects.deviceMotion = new Forecast.deviceMotion();

	}

});

/* Forecast.deviceMotion = function() {

	console.log('deviceMotion');

	// for the background image parallax, if I ever get around it.
	//window.ondevicemotion = function(event) {  
	    
	    //var accelerationX = event.accelerationIncludingGravity.x;  
	    //var accelerationY = event.accelerationIncludingGravity.y;  
	    //var accelerationZ = event.accelerationIncludingGravity.z;  


	//}  

	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;

	    console.log('accelerationX', accelerationX);
		console.log('accelerationY', accelerationY);
		console.log('accelerationZ', accelerationZ);
	}

	window.addEventListener("devicemotion", handleMotionEvent, true);
	
} */

Forecast.getData = function(myLocation) {

	var myLocation = myLocation;

	var contentDiv = document.getElementById('displayWeather');
    
     $(function() {

          var a='http://api.openweathermap.org/data/2.5/weather?q=';
        var b='&mode=xml&units=metric';
		$.ajax({
            type: "GET",
			dataType: "xml",
			url: a+ myLocation +b,
            error: function(){
				// retrieve the data from local storage instead...
                citySol = "0"; 
            citySolPor = "0"; 


							
			},
			success: function(xml) {
                
                $('current',xml).each(function(i) {
		//	cityPais = $(this).find("country").text();
			// cityNome = $(this).find("city").attr("name"); 
             citySol = $(this).find("sun").attr("rise"); 
            citySolPor = $(this).find("sun").attr("set"); 
         //   cityTemp = $(this).find("temperature").attr("value"); 
           

			
			// Build row HTML data and store in string
			BuildStudentHTML(citySol,citySolPor);
                    

		});
				
			}
			
			
		});
		
	});

	$(function() {
        var b='http://api.worldweatheronline.com/free/v1/weather.ashx?q=' + myLocation + '&format=json&num_of_days=5&key=zvnebhrcsd8vyzzepktm3ckh';
		$.ajax({
            type: "GET",
			dataType: "jsonp",
			url: b,
			beforeSend: function() {

				// store current selected location 			
				localStorage.setItem('myLocation', myLocation);
                
                console.log("1");

				// add loading spinner elem
				contentDiv.setAttribute('class', 'loading');

			},
			complete: function(){
			
				// remove loading spinner elem
				contentDiv.setAttribute('class', '');
                console.log("2");
				
			},
			error: function(){
				// retrieve the data from local storage instead...
                console.log("Australopithecus");
    //            		$("#showCurrentLocation").innerHTML='oi';
            Forecast.objects.weatherToday = new Forecast.weatherToday();
                console.log("3");


							
			},
            success: function(weather) {
                
                console.log("4");
				
				console.log('weather: ', weather);

				// shove the weather data into local storage:
				localStorage.setItem('weatherData', JSON.stringify(weather));

				// call the display weather object
				Forecast.objects.weatherToday = new Forecast.weatherToday();
				
			}
			
			
		});
		
	});
	
}

function BuildStudentHTML(citySol,citySolPor){
	
	// Check to see if their is a "post" attribute in the name field
/*	if ((studentPost) != undefined){
		studentPostHTML = "<strong>(" + studentPost + ")</strong>";
	}
	else			
	{
		studentPostHTML = "";
	} */
	
	// Build HTML string and return
    citySolok= new Date(citySol);
     citySolok.setUTCHours(-15);
     
      citySolPorok= new Date(citySolPor);
     citySolPorok.setUTCHours(-4);
     
     var now = new Date(citySol);
    var citySolokH = citySolok.getHours();
    var citySolokM = citySolok.getMinutes();
     
      var now = new Date(citySolPor);
    var citySolPorokH = citySolPorok.getHours();
    var citySolPorokM = citySolPorok.getMinutes();
     
    var saida='<ul class=\"next5 clearfix\"><p class=\"p1\">Sol</p>'
        

			// day 2
			+ '<li>' 

				+ '<div class=\"sol-nasc\"></div>'  

				+'<span class=\"previsao-max\">'+ citySolokH+'h'+citySolokM+'</span>' + '</p>' 

			+ '</li>'

			// day 3
			+ '<li>' 

				+ '<div class=\"sol-por\"></div>'  

				+'<span class=\"previsao-max\">'+ citySolPorokH+'h'+citySolPorokM+'</span>' + '</p>' 

			+ '</li>'

			// day 4
			
			// day 5

			// close UL
			+ '</ul>';
    
    return saida;

     

}

Forecast.weatherToday = function(myLocation) {
    
  var sol=BuildStudentHTML(citySol,citySolPor);
    	
    var myLocation = localStorage.getItem('myLocation');
	console.log(myLocation);



	// get weather data from localStorage (as a string)
	var weatherData = localStorage.getItem('weatherData');

	// convert string back into JSON object
	var weatherDataObj = eval('(' + weatherData + ')');

	// display the weather in this DIV
	var displayWeatherDiv = document.getElementById('displayWeather');

	// check to see if data returned has an error element
    if (weatherData===null||weatherDataObj.data.error) {
//document.getElementById('fundo').classList.remove('class');
		// display whoops message
		displayWeatherDiv.innerHTML = '<div id=\"ops\"><h4>Ops!</h4><h4 style=\"    font-size: 15px;    margin: 10px;\">'+
            'Ocorreu algum problema, verifique sua conexão com a internet ou digite um nome de cidade válido. </h4>'+
            '<img src=\"img/erro-min.gif\" style=\"    margin-top: 10px;\"></div>';

		// get BODY element
	/*	var bodyElem = document.getElementById('fundo')[0]; */

		// add error class to BODY
        		//$("#fundo").addClass('error');
            document.getElementById('fundo').className='error';


		// break out of function
		return;

}



	// variable for the weather description ie 'Partly Cloudy'
	var weatherNum = Forecast.base._weatherCodes.codes.condition[weatherDataObj.data.current_condition[0].weatherCode].description;

	// set the body class
	Forecast.objects.setBodyClass = new Forecast.setBodyClass(weatherDataObj.data.current_condition[0].weatherCode);
	
	// if temperature setting is in farenheit
	if (localStorage.getItem('tempType') === 'F') {

		// create var with HTML for F temp
		var temp = '<span class=\"temp_f\">' + weatherDataObj.data.current_condition[0].temp_F + '<span class=\"temp_f_small\">&#176;</span></span>'
var local=weatherDataObj.data.request[0].query;
		displayWeatherDiv.innerHTML = 

			// location goes here
			'</div><h1 class=\"forecast_location\">' + local.substring(0,23) + '</h1><div id=\"espaco\"></div>' +'<div style=\"padding-left:7px; height:85px;\" class=\"day-icon climacon icon-' + weatherDataObj.data.current_condition[0].weatherCode + '\"><div class=\"weatherNum\">' + weatherNum + '</div><div class=\"temp-min\"> <div class=\"txt-minmax\">' + weatherDataObj.data.weather[0].tempMinF + '&#176;' 

				+ '</div></div><div class=\"temp-max\"><div class=\"txt-minmax\"> ' + weatherDataObj.data.weather[0].tempMaxC + '&#176;'+ '</div></div></div>'+ temp

			// list for next five days weather summary
			+ '<ul class=\"next5 clearfix\"><p class=\"p1\">Previs&atilde;o do tempo</p>'

			// day 2
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[1].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[1].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[1].tempMinF + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[1].tempMaxF + '&#176;</span>' + '</p>' 

			+ '</li>'

			// day 3
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[2].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[2].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[2].tempMinF + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[2].tempMaxF + '&#176;</span>' + '</p>'

			+ '</li>'

			// day 4
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[3].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[3].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[3].tempMinF + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[3].tempMaxF + '&#176;</span>' + '</p>'

			+ '</li>'

			// day 5
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[4].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[4].date)   

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[4].tempMinF + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[4].tempMaxF + '&#176;</span>' + '</p>'

			+ '</li>'

			// close UL
			+ '</ul>'
        
          //DETALHES FOR FARENIGHTY 
        + '<ul class=\"next5 clearfix\"><p class=\"p1\">Detalhes</p>'
        
        +'<li class=\"det-icon\" ><div id=\"det\" class=\"day-icon climacon icon-' + weatherDataObj.data.current_condition[0].weatherCode + '\"></li>'

			// day 2
			+ '<li>' 

				+ 'Nuvens'  

				+'<span class=\"previsao-max\">'+weatherDataObj.data.current_condition[0].cloudcover+'%</span>' + '</p>' 

			+ '</li>'

			// day 3
			+ '<li>' 

				+ 'Umidade'  

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.current_condition[0].humidity + '%</span>' + '</p>'

			+ '</li>'

			// day 4
			+ '<li>' 

				+ 'Visibilidade'

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.current_condition[0].visibility + '%</span>' + '</p>'

			+ '</li>'

			// day 5

			// close UL
			+ '</ul>';
        ;

			/* add time for last weather query at server side
			+ '<p class=\"time\">Last updated: ' + weatherDataObj.data.current_condition[0].observation_time + '</p>'; */

	}

	// if temperature setting is in celcius
	if (localStorage.getItem('tempType') === 'C') {

		// create var with HTML for C temp
		var temp = '<span class=\"temp_c\">' + weatherDataObj.data.current_condition[0].temp_C + '<span class=\"temp_c_small\">&#176;</span></span>'
        var local=weatherDataObj.data.request[0].query;
        
		displayWeatherDiv.innerHTML = 

			// location goes here
			'</div><h1 class=\"forecast_location\">' + local.substring(0,23) + '</h1><div id=\"espaco\"></div>' +'<div style=\"padding-left:7px; height:85px;\" class=\"day-icon climacon icon-' + weatherDataObj.data.current_condition[0].weatherCode + '\"><div class=\"weatherNum\">' + weatherNum + '</div><div class=\"temp-min\"> <div class=\"txt-minmax\">' + weatherDataObj.data.weather[0].tempMinC + '&#176;' 

				+ '</div></div><div class=\"temp-max\"><div class=\"txt-minmax\"> ' + weatherDataObj.data.weather[0].tempMaxC + '&#176;'+ '</div></div></div>'+ temp

			// list for next five days weather summary
			+ '<ul class=\"next5 clearfix\"><p class=\"p1\">Previs&atilde;o do tempo</p>'

			// day 2
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[1].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[1].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[1].tempMinC + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[1].tempMaxC + '&#176;</span>' + '</p>' 

			+ '</li>'

			// day 3
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[2].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[2].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[2].tempMinC + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[2].tempMaxC + '&#176;</span>' + '</p>'

			+ '</li>'

			// day 4
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[3].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[3].date)  

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[3].tempMinC + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[3].tempMaxC + '&#176;</span>' + '</p>'

			+ '</li>'

			// day 5
			+ '<li>' 

				+ '<p class=\"day-icon climacon icon-' + weatherDataObj.data.weather[4].weatherCode + '\">' + Forecast.formatDate(weatherDataObj.data.weather[4].date)   

				+'<span class=\"previsao-min\">'+ weatherDataObj.data.weather[4].tempMinC + '&#176;</span>' 

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.weather[4].tempMaxC + '&#176;</span>' + '</p>'

			+ '</li>'

			// close UL
			+ '</ul>'
        
        //DETALHES FOR CELSIUS 
        + '<ul class=\"next5 clearfix\"><p class=\"p1\">Detalhes</p>'
        
        +'<li class=\"det-icon\" ><div id=\"det\" class=\"day-icon climacon icon-' + weatherDataObj.data.current_condition[0].weatherCode + '\"></li>'

			// day 2
			+ '<li>' 

				+ 'Nuvens'  

				+'<span class=\"previsao-max\">'+weatherDataObj.data.current_condition[0].cloudcover+'%</span>' + '</p>' 

			+ '</li>'

			// day 3
			+ '<li>' 

				+ 'Umidade'  

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.current_condition[0].humidity + '%</span>' + '</p>'

			+ '</li>'

			// day 4
			+ '<li>' 

				+ 'Visibilidade'

				+'<span class=\"previsao-max\">'+ weatherDataObj.data.current_condition[0].visibility + '%</span>' + '</p>'

			+ '</li>'

			// day 5

			// close UL
			+ '</ul>'
        
        //COISINHAS DO SOL CELSIUS ZUCATELI
        + sol;

			/* add time for last weather query at server side
			+ '<p class=\"time\">Last updated: ' + parseFloat(weatherDataObj.data.current_condition[0].observation_time) + '</p>'; */

	}

}

Forecast.formatDate = function(dateData) {

	// create Date object
	var dateObj = new Date(dateData);

	// apply getDay method
	var getday = dateObj.getDay();

	// convert returned number to day name
	// Sunday
	if (getday===0) {getday = 'Domingo'} 

	// Monday
	if (getday===1) {getday = 'Segunda'} 

	// Tuesday
	if (getday===2) {getday = 'Ter&ccedil;a'}

	// Wednesday
	if (getday===3) {getday = 'Quarta'} 

	// Thursday
	if (getday===4) {getday = 'Quinta'} 

	// Friday
	if (getday===5) {getday = 'Sexta'} 

	// Saturday
	if (getday===6) {getday = 'S&aacute;bado'} 

	// return the day
	return getday

}

// get the users current location
Forecast.getGeolocation = function() {
                console.log("abacaxi antes");


	var _config = {

		success: function(position) {
            console.log("abacaxi");

			// latitude variable
			var latitude  = position.coords.latitude;

			// longitude variable
			var longitude = position.coords.longitude;

			// new google maps geocoder object
			var geocoder = new google.maps.Geocoder();

			// get co-ordinates from google maps
			var latlng = new google.maps.LatLng(latitude, longitude);

			// pass co-ordinates to google maps API to get current location name
			geocoder.geocode({'latLng': latlng}, function(results, status) {
                
				if (status == google.maps.GeocoderStatus.OK) {
                    console.log("abacate");

					if (results[1]) {
                        console.log("abobrinha");

						//formatted address
						console.log(results[0].formatted_address)

						console.log(results[0].address_components)

						//find country name
						for (var i=0; i<results[0].address_components.length; i++) {

							for (var b=0;b<results[0].address_components[i].types.length;b++) {

								//there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
								//if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
								if (results[0].address_components[i].types[b] == "locality") {
								city=results[0].address_components[i].long_name;
                                

						      }

					       }
                        }

					var abc = results[0].formatted_address;
					bairro = results[0].address_components[2].long_name; 
                   // city = results[0].address_components[3].long_name;


					// get the weather data for the resolved location
					Forecast.objects.getData = new Forecast.getData(city);



                    
                    } else {

						console.log("No results found");

					}

				} else {

					console.log("Geocoder failed due to: " + status);

				}

		    });

		},

		// if geolocation fails to retrieve your location
	error: function() {
        console.log("abacaxi ruim");
            
			       		$("#panel").addClass('panel');

        
                	//	$("#fundo").addClass('style_113');
        			     Forecast.objects.weatherToday = new Forecast.weatherToday();



		} 

	} 

var geoService = navigator.geolocation;
	if (geoService) {
    	navigator.geolocation.getCurrentPosition(_config.success, _config.error);

	} else {
    	navigator.geolocation.getCurrentPosition(_config.success, _config.error);
	}
    
	
    
  // 	console.log(this);


	
}

Forecast.settings = function() {

	var _config = {

		// settings button
		settingsBtn: document.getElementById('settingsBtn'),

		// done button
		doneBtn: document.getElementById('doneBtn'),

		// settings element
		settingsElem: document.getElementById('settings'),

		// show current location
		currentLocationDiv: document.getElementById('showCurrentLocation'),

		// get weather data from localStorage
		weatherData: localStorage.getItem('weatherData'),

		// convert JSON text into an object
		weatherDataObj: eval('(' + this.weatherData + ')'),

		// settings panel, to flip
		settingsPanel: document.getElementById('panel'),

		// clear location button
		currentLocBtn: document.getElementById('clearLoc'),
        
		clearBtn: document.getElementById('clearBtn'),

		// input field for the location
		locationInput: document.getElementById('newLocation'),

		// location input button
		locationInputBtn: document.getElementById('submitLocation'),

		// back button from the settings page
		backButton: document.getElementById('backBtn'),

		// C
		temp_C_btn: document.getElementById('showTempC'),

		// F
		temp_F_btn: document.getElementById('showTempF')
		

		//saveToFave: document.getElementById('saveFave')

	}

	//_config.saveToFave.addEventListener('click', function() {

	//	localStorage.setItem('locFave', _config.locationInput.value);

	//}, false);

	if (localStorage.getItem('tempType') === 'C') {

		$("#showTempC").addClass('selected');
		$("#showTempF").removeClass('selected');


	}
	if (localStorage.getItem('tempType') === 'F') {

		$("#showTempF").addClass('selected');
		$("#showTempC").removeClass('selected');

	}

	_config.temp_C_btn.addEventListener('click', function() {

		// set local storage to temp type
		localStorage.setItem('tempType', 'C');

		// remove 'selected' from F
		$("#showTempF").removeClass('selected');

		
		// add 'selected' to C
		$("#showTempC").addClass('selected');

        

	}, false);

	_config.temp_F_btn.addEventListener('click', function() {

		// set local storage to temp type
		localStorage.setItem('tempType', 'F');

		// remove 'selected' from C
		$("#showTempC").removeClass('selected');

		// add 'selected' to F
		$("#showTempF").addClass('selected');

	}, false);
    
    _config.clearBtn.addEventListener('click', function(e){
        document.getElementById('newLocation').value="";

        e.preventDefault();

		// try to prevent the page flashing/refreshing
		return false;

	}, false);

	// click the clear location button:
	_config.currentLocBtn.addEventListener('click', function(e){

		// clear local storage of location, temperature type and weather JSON
		localStorage.removeItem('myLocation', 'tempType', 'weatherData');

		// set the geolocation object off
		Forecast.objects.getGeolocation = new Forecast.getGeolocation();

		// flip the panel
		_config.settingsPanel.className = "panel";

		// try to prevent the page flashing/refreshing
		e.preventDefault();

		// try to prevent the page flashing/refreshing
		return false;

	}, false);

	// click event for the settings button
	_config.settingsBtn.addEventListener('click', function() {

		// add the flip class to panel
		_config.settingsPanel.className = "panel flip";

	}, false);

	_config.locationInputBtn.addEventListener('click', function(e) {

		// get forecast data from form input value
		Forecast.objects.getData = new Forecast.getData(_config.locationInput.value);

		// flip the panel
		_config.settingsPanel.className = "panel";

		// set the value from the form in the local storage
		localStorage.setItem('myLocation', _config.locationInput.value);

		// try to prevent the page flashing/refreshing
		e.preventDefault();

		// try to prevent the page flashing/refreshing
		return false;

	}, false);

	_config.backButton.addEventListener('click', function() {

		_config.settingsPanel.className = "panel";

		Forecast.weatherToday();

	}, false);

}

Forecast.setBodyClass = function(condition) {

	// get the BODY element
	var bodyElem = document.getElementById('fundo');

	// create a unique class
	bodyClass = 'style_' + condition;

	// clear the previous class
	bodyElem.className = bodyClass

	// use the addClass method to add CSS class to body
                    		$("#fundo").addClass(bodyClass);


}


/* if class is present
Forecast.hasClass = function(ele,cls) {

	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	
}

// add class, pass in element and class value to add
Forecast.addClass = function(ele,cls) {

	if (!Forecast.hasClass(ele,cls)) ele.className += " "+cls;
	
}

// remove class, pass in element and class value to remove
Forecast.removeClass = function(ele,cls) {

	if (Forecast.hasClass(ele,cls)) {
	
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		
		ele.className=ele.className.replace(reg,' ');
		
	}
	
} */


forecast = new Forecast.base.init();