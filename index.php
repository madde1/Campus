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
    <div class="headersticky">
        <div class="header">
            <div class="icons">
                <ion-icon class="menu" id="menu" name="menu"></ion-icon>
                <ion-icon class="headericon" id="searchicon" name="search"></ion-icon>
                <ion-icon class="headericon" id="usericon" name="person"></ion-icon>
                <ion-icon class="headericon" id="schoolicon" name="school"></ion-icon>
                <ion-icon class="headericon" id="homeicon" name="home"></ion-icon>
            </div>
            <div class="login">

                <form action="../projectdemo/includes/verify_login.php" method="post">
                    <input type="hidden" name="isnew" id="isnew" value="1">
                    <input type="text" name="user" placeholder="Ditt användarnnamn:">
                    <p><input type="password" name="pass" placeholder="Ditt lösenord:"></p>
                    <span>
                    <input type="submit" value="Logga in" class="apply">
                    <a href="register.php"><input type="button" value="Registrera" class="registerbutton"></a>
                </span>
                </form>
            </div>

        </div>

    </div>
</header>



<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script src="js/javascript.js" type="text/javascript"></script>
</body>
</html>


<meta http-equiv="X-UA-Compatible" content="ie=edge">
<script src="https://unpkg.com/ionicons@4.2.2/dist/ionicons.js"></script>
<link href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">