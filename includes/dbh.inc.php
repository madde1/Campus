<?php



$servername = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dBName = "CampusDB";


//Anslutningen till Databasen Campus
$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

//Om anslutningen till Databasen misslyckades
if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
