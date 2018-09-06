function getWeather(){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a50b2f1bbbdf7b0832f47d1854ef9b45",function(jdata){
    $("#weather").text(jdata.main.temp);
  });
}