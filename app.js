var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=YOUR_API_KEY')
.then(response => response.json())
.then(data =>
  {
  // console.log(data)
  var tempValue = parseInt(data['main']['temp']) - 273.15;
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue.toFixed(2)+" °C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})