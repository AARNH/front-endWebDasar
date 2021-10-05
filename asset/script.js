/*toogle navigasi*/
const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('nav ul') ;

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

//auto slide
var count = 1 ;
setInterval(function(){
    document.getElementById("radio"+count).checked = true ;
    count++;
    if (count > 4){
        count = 1;
    }
},5000);

// go to travel
const buttonTravelElement = document.querySelector('#travel');

buttonTravelElement.addEventListener('click', function() {
    goToTravel();
});
// go to yayasan
const buttonYayasanElement = document.querySelector('#yayasan');

buttonYayasanElement.addEventListener('click', function() {
    goToYayasan();
});
// go to bangunan
const buttonBangunanElement = document.querySelector('#bangunan');

buttonBangunanElement.addEventListener('click', function() {
    goToBangunan();
});
// go to herbal
const buttonHerbalElement = document.querySelector('#herbal');

buttonHerbalElement.addEventListener('click', function() {
    goToHerbal();
});
