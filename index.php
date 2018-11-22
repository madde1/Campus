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
            <div class="slide slide1 fade">
                <div class="slide-content">
                </div>
            </div>
            <div class="slide slide2 fade">
                <div class="slide-content">
                </div>
            </div>
            <div class="slide slide3 fade">
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
        <footer class="footer">
            <br>
            <img src="img/logga-campus-skarpare.png" class="item1">

                <br>
                <p class="item2"> Skolexpedition<br>
                - för dig som är elev<br>
                031-315 10 14
                <br>
            <a class="linkFooter" href="skolexp.campus@molndal.se">skolexp.campus@molndal.se </a>
                </p>

            <div class="item3">
                <div class="footerIcons">
                    <a href=""><ion-icon name="logo-facebook" class="linkFooter"></ion-icon></a>
                    <a href=""><ion-icon name="logo-instagram" class="linkFooter"></ion-icon></a>
                    <a href=""><ion-icon name="logo-googleplus" class="linkFooter"></ion-icon></a>
                    <a href=""><ion-icon name="logo-pinterest" class="linkFooter"></ion-icon></a>
                </div>
            </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2134.459286848991!2d12.0142898!3d57.6576781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff2315c83304b%3A0xcf93cc3fac343baa!2sKulturhuset+M%C3%B6llan!5e0!3m2!1ssv!2sse!4v1542789970452" width="250" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
        </footer>
    </div>

</main>


</div>
<script type="text/javascript" src="java/jquery-3.2.1.min.js"></script>
<script src="java/js.js" type="text/javascript"></script>
</body>
</html>

