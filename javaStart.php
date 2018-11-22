<?php
/**
 * Created by PhpStorm.
 * User: 87sofrid
 * Date: 2018-11-21
 * Time: 10:23
 */
?>

<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/html">

<body>


<?php
include 'includes/header.php';
?>


<main>
    <div class="wrap">
        <div class="slider">
            <div class="headerBild">
                <div class="slide-content">
                </div>
            </div>
        </div>
    </div>
    <section class="javaInfo">
        <?php
        /** Inkluderar JavaInfo delen på sidan. /Sofia */
        include 'includes/javainfo.php';
        ?>
    </section>
    <section class="AnsokanJava">
        <div class="ansokanKontaktJava">
            <h3>Ansökan</h3>
            <p>
                Ansökan för start HT2018 är stängd.
            </p>
        </div>
    </section>
</main>

<script type="text/javascript" src="java/jquery-3.2.1.min.js"></script>
<script src="java/js.js" type="text/javascript"></script>
<script src="bildSpel/java.js"></script>
</body>
</html>

