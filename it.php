<?php
/**
 * Created by PhpStorm.
 * User: 87sofrid
 * Date: 2018-11-21
 * Time: 10:53
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
            <div class="headerIt">
                <div class="slide-content">
                </div>
            </div>
        </div>
    </div>
    <section class="itInfo">
        <?php
        /** Inkluderar itInfo delen på sidan. /Sofia */
        include 'includes/itInfo.php';
        ?>
    </section>
    <section class="AnsokanIt">
        <div class="ansokanKontaktIt">
            <h3>Ansökan</h3>
            <p>
                Ansök till IT-projektledare med start januari 2019. Ansökan stänger 26 november 2018. Kontakta oss för
                mer information.

                Alla ansökningar som inkommer behandlas löpande. Är du nyfiken eller inte hör något från oss så hör av
                dig till oss!
            </p>
        </div>
    </section>
</main>

<script type="text/javascript" src="java/jquery-3.2.1.min.js"></script>
<script src="java/js.js" type="text/javascript"></script>
<script src="bildSpel/java.js"></script>
</body>
</html>
