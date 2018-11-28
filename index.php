
<?php
include 'includes/header.php';
?>

<main>
    <section class="bildspel">
    <div class="wrap">
        <div id="arrow-left" class="arrow"></div>
        <div class="slider">
            <div class="slide slide1">
                <div class="slide-content">
                </div>
            </div>
            <div class="slide slide2">
                <div class="slide-content">
                </div>
            </div>
            <div class="slide slide3">
                <div class="slide-content">
                </div>
            </div>
        </div>
        <div id="arrow-right" class="arrow"></div>
    </div>
    </section>
    <section>
        <h1>CAMPUS MÖLNDAL</h1>
        <p>Campus Mölndal är en samlingsplats för all vuxenutbildning inom Mölndals stad.
            Hos oss kan du studera på alla nivåer - från kurser motsvarande grundskola,
            till eftergymnasial nivå i form av yrkeshögskola.
            Du kan också få råd, information och stöd i planering av dina studier av våra studie-
            och yrkesvägledare.</p>
    </section>
<section class="aktuellt">
    <?php
    /** Inkluderar aktuellt delen på sidan. /madde */
    include 'includes/aktuellt.php';
    ?>
</section>
</main>
<script>

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
</script>
    <?php
    include 'includes/footer.php';
    ?>
