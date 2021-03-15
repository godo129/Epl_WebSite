function ch_bg()
{
var background_img = "./background/"
var number = Math.floor(Math.random()*5)+1;
var container = document.getElementById('back1');

background_img += number + ".jpg";
container.style.backgroundImage= "url('"+background_img+"')";
container.style.backgroundSize = "100%";



}
