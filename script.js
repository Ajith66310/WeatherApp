
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = window.APP_CONFIG.apiKey;
const apiUrl = window.APP_CONFIG.apiUrl;
async function checkWeather(city) {
  const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
  if(response.status == 404){
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none"; 
  }else{
    var data  = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
    if(data.weather[0].main === "Clouds"){
      weatherIcon.src = "Assets/images/Clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
      weatherIcon.src = "Assets/images/Clear.png"
    } 
    else if(data.weather[0].main === "Rain"){
      weatherIcon.src = "Assets/images/Rain.png"
    } 
    else if(data.weather[0].main === "Drizzle"){
      weatherIcon.src = "Assets/images/Drizzle.png"
    } 
    else if(data.weather[0].main === "Mist"){
      weatherIcon.src = "Assets/images/Mist.png"
    }
    document.querySelector('.weather').style.display = "block"; 
    document.querySelector('.error').style.display = "none";
  }
}

searchBtn.addEventListener('click',()=>{
  checkWeather(searchBox.value);
})