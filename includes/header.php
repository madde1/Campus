<?php

?>

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
                <form action="../includes/verify_login.php" method="post">
                    <input type="hidden" name="isnew" id="isnew" value="1">
                    <input type="text" name="user" placeholder="Ditt användarnnamn:">
                    <p><input type="password" name="pass" placeholder="Ditt lösenord:"></p>
                    <span>

                    <input type="submit" value="Logga in" class="loginbutton">
                    <a href="register.php"><input type="button" value="Registrera" class="registerbutton"></a>
                    </span>
                </form>
            </div>

            <div class="searchfield"><input type="text" placeholder="Sök..."></div>

        </div>

    </div>

</header>




