
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
    <?php
    include 'includes/footer.php';
    ?>
