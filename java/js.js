


// Kod som döljer och visar meny-val
$(document.body).click( function(e) {
    closeDropdowns();

});

$('.login').click( function(e) {
    e.stopPropagation();
});

$('#searchicon').click( function(e) {
    e.stopPropagation();
});

$('.searchfield').click( function(e) {
    e.stopPropagation();
});

$('#utbildningar-click').click( function(e) {
    e.stopPropagation();
});

$('#studenttjänster-click').click( function(e) {
    e.stopPropagation();
});

$('#vägledning-click').click( function(e) {
    e.stopPropagation();
});

$('#kontakt-click').click( function(e) {
    e.stopPropagation();
});

$('.header-nav').click( function(e) {
    e.stopPropagation();
});

function closeDropdowns(){

    $('.header-nav').hide();
    $('#utbildningar-dropdown').hide();
    $('#utbildningar-click').css('color', 'lighten(#1E4363, 70%)');
    $('#studenttjänster-dropdown').hide();
    $('#studenttjänster-click').css('color', 'lighten(#1E4363, 70%)');
    $('#vägledning-dropdown').hide();
    $('#vägledning-click').css('color', 'lighten(#1E4363, 70%)');
    $('#kontakt-dropdown').hide();
    $('#kontakt-click').css('color', 'lighten(#1E4363, 70%)');






    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');
    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');
    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');
    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');
    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');
    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');

}

$('#menu').click( function(e) {
    e.stopPropagation();
});

$('#usericon').click( function(e) {
    e.stopPropagation();
});

$('#menuutb').click( function(e) {
    e.stopPropagation();
});

$('#menustu').click( function(e) {
    e.stopPropagation();
});

$('#menuvag').click( function(e) {
    e.stopPropagation();
});

$('#menukon').click( function(e) {
    e.stopPropagation();
});

$('#schoolicon').click( function(e) {
    e.stopPropagation();
});


$('.header-nav').hide();

$('#menu').click(function() {
    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');

    $('.header-nav').toggle();

});

$('.login').hide();

$('#usericon').click(function(){

    $('.searchfield').hide();

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');

    $('.header-nav').hide();

    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').toggle();
});


$('.searchfield').hide();

$('#searchicon').click(function(){

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');

    $('.header-nav').hide();

    $('.searchfield').toggle();
});




$('#utbildningar-dropdown').hide();

$('#utbildningar-click').click(function(){
    $('#studenttjänster-dropdown').hide();
    $('#vägledning-dropdown').hide();
    $('#kontakt-dropdown').hide();

    $('#utbildningar-dropdown').toggle();
});


$('#studenttjänster-dropdown').hide();

$('#studenttjänster-click').click(function(){
    $('#vägledning-dropdown').hide();
    $('#kontakt-dropdown').hide();
    $('#utbildningar-dropdown').hide();

    $('#studenttjänster-dropdown').toggle();
});


$('#vägledning-dropdown').hide();

$('#vägledning-click').click(function(){
    $('#kontakt-dropdown').hide();
    $('#utbildningar-dropdown').hide();
    $('#studenttjänster-dropdown').hide();

    $('#vägledning-dropdown').toggle();
});


$('#kontakt-dropdown').hide();

$('#kontakt-click').click(function(){
    $('#utbildningar-dropdown').hide();
    $('#studenttjänster-dropdown').hide();
    $('#vägledning-dropdown').hide();

    $('#kontakt-dropdown').toggle();
});

// Ändrar färg på menyval när användaren klickar på den

$('#utbildningar-click').click(function(){

    $('#studenttjänster-click').css('color', 'lighten(#1E4363, 70%)');
    $('#vägledning-click').css('color', 'lighten(#1E4363, 70%)');
    $('#kontakt-click').css('color', 'lighten(#1E4363, 70%)');


    var color = $('#utbildningar-click').css('lighten(#1E4363, 70%)');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#utbildningar-click').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#utbildningar-click').css('color', 'lighten(#1E4363, 70%)');
    }
});

$('#studenttjänster-click').click(function(){

    $('#utbildningar-click').css('color', 'lighten(#1E4363, 70%)');
    $('#vägledning-click').css('color', 'lighten(#1E4363, 70%)');
    $('#kontakt-click').css('color', 'lighten(#1E4363, 70%)');

    var color = $('#studenttjänster-click').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#studenttjänster-click').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#studenttjänster-click').css('color', 'lighten(#1E4363, 70%)');
    }
});

$('#vägledning-click').click(function(){

    $('#utbildningar-click').css('color', 'lighten(#1E4363, 70%)');
    $('#studenttjänster-click').css('color', 'lighten(#1E4363, 70%)');
    $('#kontakt-click').css('color', 'lighten(#1E4363, 70%)');

    var color = $('#vägledning-click').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#vägledning-click').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#vägledning-click').css('color', 'lighten(#1E4363, 70%)');
    }
});

$('#kontakt-click').click(function(){

    $('#utbildningar-click').css('color', 'lighten(#1E4363, 70%)');
    $('#vägledning-click').css('color', 'lighten(#1E4363, 70%)');
    $('#studenttjänster-click').css('color', 'lighten(#1E4363, 70%)');

    var color = $('#kontakt-click').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#kontakt-click').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#kontakt-click').css('color', 'lighten(#1E4363, 70%)');
    }
});





// Ändrar färg på sök-ikonen när användaren klickar på den

$('#searchicon').click(function(){

    var color = $('#searchicon').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#searchicon').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#searchicon').css('color', 'lighten(#1E4363, 70%)');
    }
});

// Ändrar färg på användar-ikonen när användaren klickar på den

$('#usericon').click(function(){
    var color = $('#usericon').css('color');
    if (color == 'rgb(237, 243, 249))' || color == 'lighten(#1E4363, 70%)'){
        $('#usericon').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#usericon').css('color', 'lighten(#1E4363, 70%)');
    }
});

// Ändrar färg på menyvalet utbildningar när användaren klickar

$('#menuutb').click(function(){
    var color = $('#menuutb').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#menuutb').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#menuutb').css('color', 'lighten(#1E4363, 70%)');
    }
});

$('#menustu').click(function(){
    var color = $('#menustu').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#menustu').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#menustu').css('color', 'lighten(#1E4363, 70%)');
    }
});

$('#menuvag').click(function(){
    var color = $('#menuvag').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#menuvag').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#menuvag').css('color', 'lighten(#1E4363, 70%)');
    }

});

$('#menukon').click(function(){
    var color = $('#menukon').css('color');
    if (color == 'rgb(237, 243, 249)' || color == 'lighten(#1E4363, 70%)'){
        $('#menukon').css('color', '#FFB00D');
    }
    if (color == 'rgb(255, 176, 13)' || color == '#FFB00D'){
        $('#menukon').css('color', 'lighten(#1E4363, 70%)');
    }


});



// Döljer och visar dropdown
$('.desktoputbildningar').hide();

$('#menuutb').click(function(){
    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');

    $('.desktoputbildningar').toggle();
});


$('.desktopstudent').hide();

$('#menustu').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');


    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');


    $('.desktopstudent').toggle();
});


$('.desktopvagledning').hide();

$('#menuvag').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'lighten(#1E4363, 70%)');


    $('.desktopvagledning').toggle();
});


$('.desktopkontakt').hide();

$('#menukon').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'lighten(#1E4363, 70%)');

    $('.login').hide();
    $('#usericon').css('color', 'lighten(#1E4363, 70%)');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'lighten(#1E4363, 70%)');

    $('.desktopkontakt').toggle();
});





/*
//bildspel
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("slide");
    for(i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000);
}

let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//clear all images
function reset(){
    for (let i=0; i<sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

//init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// show prev
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;


}
// show next
function slideRight(){
    reset();
    sliderImages[current +1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener('click', function(){
    if (current === 0){
        current = sliderImages.length;
    }
    slideLeft()
});
// right arrow click
arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length -1){
        current = -1;
    }
    slideRight();
});
startSlide();







//Bildspel slut

*/


// Ansökningssystem

function addJava(){
    var input = document.getElementById("edu-java");
    localStorage.setItem("java", input.value);
    changecolor();
}

function addIT(){
    var input = document.getElementById("edu");
    localStorage.setItem("IT", input.value);
    changecolor();
}

var IT = localStorage.getItem("IT");
var java = localStorage.getItem("java");


if(IT == 1 || java == 1){
    changecolor();
}

if(IT == 0 && java == 0){
    noColor()
}

function changecolor() {
    console.log("Kör changecolor!");

    $('#schoolicon').css('color', '#ffb00d');
}

// Ikon blir grå
function noColor(){
    console.log("Kör nocolor!");

    $('#schoolicon').css('color', '#b3b3b3');
}

function removeIT(){
    var input = document.getElementById("edu");
    localStorage.setItem("IT", input.value);
    if(compare()){
        noColor();
    }
}

function removeJava(){
    var input = document.getElementById("edu-java");
    localStorage.setItem("java", input.value);
    if(compare()){
        noColor();
    }
}



function compare(){
    var IT = localStorage.getItem("IT");
    var java = localStorage.getItem("java");

    if(IT == 0 && java == 0){
        return true;
    }
}

function send(){
    localStorage.setItem('java', '0');
    localStorage.setItem('IT', '0');
    console.log("Inuti send");
    //window.location.href = "thankyou.php";
}







