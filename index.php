<?php

?>

<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/html">

<body>

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
<section class="aktuellt">
    <?php
    /** Inkluderar aktuellt delen på sidan. /madde */
    include 'includes/aktuellt.php';
    ?>
</section>

    <?php
    include 'includes/footer.php';
    ?>
