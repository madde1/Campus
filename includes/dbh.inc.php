<?php



$servername = "localhost:3307";
$dBUsername = "root";
$dBPassword = "Melvin2012";
$dBName = "CampusDB";


//Anslutningen till Databasen Campus
$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

//Om anslutningen till Databasen misslyckades
if (!$conn) {
    die("Connection failed: ".mysqli_connect_error());
}
