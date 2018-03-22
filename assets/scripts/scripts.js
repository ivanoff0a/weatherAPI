$(document).ready(function (){

    let city = $('.weather-city'),
        desc = $('.weather-desc'),
        wind = $('.weather-wind'),
        degree = $('.weather-degree');
        btn = $('.js-btn');
        input = $('.js-input');
        errorNotifier = $('.error-notif')

    // $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=498817&APPID=24ded0daa1863e28a12f2962c113341b', function(result) {
    //     setWeatherData(result);
    // })

    function setWeatherData(result) {
        city.text(result.name);
        wind.text(result.wind.speed);
        degree.text(result.main.temp);
        desc.text(result.weather[0].description);
    }

    function isError() {
        errorNotifier.toggleClass('-activated');
    }

    function isNotACity() {
        message == "city not found";
    }

    btn.click(function() {
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=24ded0daa1863e28a12f2962c113341b', function(result) {
            setWeatherData(result);
            if (input.isNotACity()) {
                return isError();
            }
        });
    })


});

