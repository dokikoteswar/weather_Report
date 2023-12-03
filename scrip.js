// let fetchData=document.getElementById('fetchData');
let homePage=document.querySelector('.homePage');
let landPage=document.getElementById('landPage');


var lat = null;
var long = null;
var url = null;
let apiKey ="134890847bacde8c76085e8e660abc7f";

fetchData.addEventListener('click', ()=>{
     
    homePage.classList.toggle('d_none');
    landPage.classList.toggle('d_none');

    getLocation();


})


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
     lat = position.coords.latitude;
     long = position.coords.longitude;
    document.getElementById("gmap").src = "https://maps.google.com/maps?q=" + lat + "," + long + "&z=15&output=embed";
   
    document.getElementById("lat").innerHTML = `${lat}`;
    document.getElementById("long").innerHTML = `${long}`;
    
     url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      console.log(url);
      checkWeather();
  }




async function  checkWeather(){
     
       
      const response = await fetch(url);
      var data =  await response.json();
      

      document.getElementById('dateName').innerText = data.name;
      document.getElementById('wind').innerText = data.wind.speed;
      document.getElementById('humidity').innerText = data.main.humidity;
      document.getElementById('pressure').innerText = data.main.pressure;
      document.getElementById('feels').innerText = data.main.feels_like;
     
      document.getElementById('uv').innerText = data.cod;
      console.log(main.pressure, main.feels_like);
      
       function time(){
        const d = new Date();
          let diff = d.getTimezoneOffset();
          return diff;
       };







      


};
