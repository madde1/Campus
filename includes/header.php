<?php

?>

<header>
    <div class="headersticky">
        <div class="header">
            <div class="desktopbuttons">
                <ul>
                    <li id="menuutb">Utbildningar</li>
                    <li id="menustu">Studenttjänster</li>
                    <li id="menuvag">Vägledning</li>
                    <a href="kontakt.php"><li id="menukon">Kontakt</li></a>
                </ul>
            </div>
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

            <div class="desktoputbildningar">
                <a href="java.php"><p>Java- och webbutvecklare</p></a>
                <p>IT- och virtualiseringsspecialist</p>
                <a href="IT.php"><p>IT-projektledare</p></a>
                <p>Aktiveringspedagog inom LSS</p>
                <p>Specialiserad studiehandledare</p>
                <p>Information</p>
            </div>

            <div class="searchfield"><input type="text" placeholder="Sök..."></div>

            <div class="header-nav">

                <p id="utbildningar-click">Utbildningar &#709;</p>

                <div id="utbildningar-dropdown">
                    <a href="java.php"><p>Java- och webbutvecklare</p></a>
                    <p>IT- och virtualiseringsspecialist</p>
                    <p>IT-projektledare</p>
                    <p>Aktiveringspedagog inom LSS</p>
                    <p>Specialiserad studiehandledare</p>
                    <p>Information</p>
                </div>
                <p id="studenttjänster-click">Studenttjänster</p>

                <div id="studenttjänster-dropdown">
                    <p>Intyg, betyg och slutbetyg</p>
                    <p>Prövning och validering</p>
                    <p>Studiemedel</p>
                    <p>Schema</p>
                    <p>Studentmail</p>
                    <p>Lärplattform Itslearning</p>
                </div>
                <p id="vägledning-click">Studie- och yrkesvägledning</p>
                <div id="vägledning-dropdown">
                    <p>För dig som är över 20 år</p>
                    <p>För dig som är under 20 år</p>
                    <p>För dig med särskilda behov</p>
                </div>
                <p id="kontakt-click">Kontakta oss</p>
                <div id="kontakt-dropdown">
                    <p>Ledning</p>
                    <p>Studie- och yrkesvägledning</p>
                    <p>Administration</p>
                    <p>Hitta hit</p>
                </div>
            </div>
        </div>

    </div>

</header>




