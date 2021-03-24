const weather = document.querySelector(".js-weather");  //추가


const API_KEY = "5511dec9a16599a858d95a84a388f219";
const COORDS = 'coords';

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
  .then(function(response){
    return response.json();
  })
  .then(function(json){    // 추가... 온도, 위치 나오게
    const temperature = json.main.temp;
    var temperature_ = Math.round(temperature);
    const place = json.name;
    const wether = json.weather[0].description;
    weather.innerText = `위치: ${place}
    온도: ${temperature_}도
     날씨: ${wether}`;
  });
}


function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //latitude: latitude,
    //longitude: longitude  둘이 같다면
    latitude,
    longitude // 이렇게 가능

  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoError(){
  console.log('Cant access geo location');
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}


function loadCoords(){

  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
      askForCoords();
  } else { // 좌표값 가지고 있을 때 처리
    const parseCoords = JSON.parse(loadedCoords);

    getWeather(parseCoords.latitude , parseCoords.longitude);
  }
}


function init(){
  loadCoords();

}

init();
