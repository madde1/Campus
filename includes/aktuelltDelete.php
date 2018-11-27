<?php
/**
 * Created by PhpStorm.
 * User: madde
 * Date: 2018-11-26
 * Time: 14:25
 */
 session_start();
$db =mysqli_connect('localhost:3307','root','Melvin2012','CampusDB');
mysqli_select_db($db, "CampusDB") or die("Could not select database");
//Kontrollerar om inlägget kan raderas
if(isset($_GET['deleteid']) && $_GET['deleteid'] > 0 ){
    $isDeleteid = $_GET['deleteid'];
}

// Ska inlägget raderas?
if(isset($_POST['isdeleteid']) && $_POST['isdeleteid'] > 0 ){
    $query ="DELETE FROM aktuellt WHERE aId=". $_POST['isdeleteid'];

    $result = mysqli_query($db, $query);

    header("Location: aktuelltSkapaPost.php");
}
include "header.php"
?>

<form class="CreateAktuellt" action="aktuelltDelete.php" method="post">
    <input type="hidden" name="isdeleteid" value="<?php echo $isDeleteid; ?>">
    <label>Vill du verkligen radera inlägget?</label>
    <p><input class="btn" type="submit" value="JA"></p>
</form>
<?php
include "footer.php"
?>
<script type="text/javascript" src="/java/jquery-3.2.1.min.js"></script>
<script src="/java/js.js" type="text/javascript"></script>
