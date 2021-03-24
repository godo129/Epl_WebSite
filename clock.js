const clockContainer = document.querySelector("#ranking"),
 clockTitle = clockContainer.querySelector("h4");


 function getTime(){
   const date = new Date();
   const minutes = date.getMinutes();
   const hours = date.getHours();
   const seconds = date.getSeconds();
   const month = date.getMonth();
   const year = date.getFullYear();
   const d_ate = date.getDate();
   clockTitle.innerText = `${year}년 ${month+1}월 ${d_ate}일 ${hours < 10 ? `0${hours}` :hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`: seconds}
 `
 }



function init(){
  getTime();
  setInterval(getTime, 1000);

}

init();
