


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
    $('#utbildningar-click').css('color', 'grey');
    $('#studenttjänster-dropdown').hide();
    $('#studenttjänster-click').css('color', 'grey');
    $('#vägledning-dropdown').hide();
    $('#vägledning-click').css('color', 'grey');
    $('#kontakt-dropdown').hide();
    $('#kontakt-click').css('color', 'grey');






    $('.login').hide();
    $('#usericon').css('color', 'grey');
    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');
    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');
    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');
    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');
    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');

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


$('.header-nav').hide();

$('#menu').click(function() {
    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');

    $('.login').hide();
    $('#usericon').css('color', 'grey');

    $('.header-nav').toggle();

});

$('.login').hide();

$('#usericon').click(function(){

    $('.searchfield').hide();

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');

    $('.header-nav').hide();

    $('#searchicon').css('color', 'grey');

    $('.login').toggle();
});


$('.searchfield').hide();

$('#searchicon').click(function(){

    $('.login').hide();
    $('#usericon').css('color', 'grey');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');

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

    $('#studenttjänster-click').css('color', 'grey');
    $('#vägledning-click').css('color', 'grey');
    $('#kontakt-click').css('color', 'grey');


    var color = $('#utbildningar-click').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#utbildningar-click').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#utbildningar-click').css('color', 'grey');
    }
});

$('#studenttjänster-click').click(function(){

    $('#utbildningar-click').css('color', 'grey');
    $('#vägledning-click').css('color', 'grey');
    $('#kontakt-click').css('color', 'grey');

    var color = $('#studenttjänster-click').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#studenttjänster-click').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#studenttjänster-click').css('color', 'grey');
    }
});

$('#vägledning-click').click(function(){

    $('#utbildningar-click').css('color', 'grey');
    $('#studenttjänster-click').css('color', 'grey');
    $('#kontakt-click').css('color', 'grey');

    var color = $('#vägledning-click').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#vägledning-click').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#vägledning-click').css('color', 'grey');
    }
});

$('#kontakt-click').click(function(){

    $('#utbildningar-click').css('color', 'grey');
    $('#vägledning-click').css('color', 'grey');
    $('#studenttjänster-click').css('color', 'grey');

    var color = $('#kontakt-click').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#kontakt-click').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#kontakt-click').css('color', 'grey');
    }
});





// Ändrar färg på sök-ikonen när användaren klickar på den

$('#searchicon').click(function(){

    var color = $('#searchicon').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#searchicon').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#searchicon').css('color', 'grey');
    }
});

// Ändrar färg på användar-ikonen när användaren klickar på den

$('#usericon').click(function(){
    var color = $('#usericon').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#usericon').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#usericon').css('color', 'grey');
    }
});

// Ändrar färg på menyvalet utbildningar när användaren klickar

$('#menuutb').click(function(){
    var color = $('#menuutb').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#menuutb').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#menuutb').css('color', 'grey');
    }
});

$('#menustu').click(function(){
    var color = $('#menustu').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#menustu').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#menustu').css('color', 'grey');
    }
});

$('#menuvag').click(function(){
    var color = $('#menuvag').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#menuvag').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#menuvag').css('color', 'grey');
    }

});

$('#menukon').click(function(){
    var color = $('#menukon').css('color');
    if (color == 'rgb(128, 128, 128)' || color == 'grey'){
        $('#menukon').css('color', 'white');
    }
    if (color == 'rgb(255, 255, 255)' || color == 'white'){
        $('#menukon').css('color', 'grey');
    }


});

// Döljer och visar dropdown
$('.desktoputbildningar').hide();

$('#menuutb').click(function(){
    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');

    $('.login').hide();
    $('#usericon').css('color', 'grey');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');

    $('.desktoputbildningar').toggle();
});


$('.desktopstudent').hide();

$('#menustu').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');

    $('.login').hide();
    $('#usericon').css('color', 'grey');


    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');


    $('.desktopstudent').toggle();
});


$('.desktopvagledning').hide();

$('#menuvag').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');

    $('.login').hide();
    $('#usericon').css('color', 'grey');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');

    $('.desktopkontakt').hide();
    $('#menukon').css('color', 'grey');


    $('.desktopvagledning').toggle();
});


$('.desktopkontakt').hide();

$('#menukon').click(function(){

    $('.searchfield').hide();
    $('#searchicon').css('color', 'grey');

    $('.login').hide();
    $('#usericon').css('color', 'grey');

    $('.desktoputbildningar').hide();
    $('#menuutb').css('color', 'grey');

    $('.desktopstudent').hide();
    $('#menustu').css('color', 'grey');

    $('.desktopvagledning').hide();
    $('#menuvag').css('color', 'grey');

    $('.desktopkontakt').toggle();
});






//bildspel
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

$(document.body).click( function() {
    if (url == "http://localhost/skolprojekt/user%20story%205/index.php"){
        $('#menukon').css('color', 'white');
    }
});






