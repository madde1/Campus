// Kod som döljer och visar meny-val

$('.login').hide();

$('#usericon').click(function(){
    $('.login').toggle();
});

$('.searchfield').hide();

$('#searchicon').click(function(){
    $('.searchfield').toggle();
});

$('.header-nav').hide();

$('#menu').click(function(){
    $('.header-nav').toggle();
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

// Döljer och visar dropdown
$('.desktoputbildningar').hide();

$('#menuutb').click(function(){
    $('.desktoputbildningar').toggle();
});

//bildspel

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
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

