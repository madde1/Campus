<?php

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>
    <link href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
</head>
<body>
<header>
<?php
include 'includes/header.php';
?>
</header>

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

<main>

    <?php
    /** Inkluderar aktuellt delen på sidan. /madde */
    include 'includes/aktuellt.php';
    ?>
</main>


</div>
<script type="text/javascript" src="java/jquery-3.2.1.min.js"></script>
<script src="java/js.js" type="text/javascript"></script>
</body>
</html>

