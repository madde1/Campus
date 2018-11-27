<?php
/**
 * Created by PhpStorm.
 * User: madde
 * Date: 2018-11-26
 * Time: 14:25
 */session_start();
$db =mysqli_connect('localhost:3307','root','Melvin2012','CampusDB');
mysqli_select_db($db, "CampusDB") or die("Could not select database");

if(isset($_GET['editid']) && $_GET['editid'] > 0 ){
    $query = "SELECT * FROM aktuellt WHERE aId=".$_GET['editid'];

    $result = mysqli_query($db,$query);

    $row = mysqli_fetch_assoc($result);
}

if(isset($_POST['updateid']) && $_POST['updateid'] >0){
    $headline = mysqli_real_escape_string($db, $_POST['headline']);
    $summation = mysqli_real_escape_string($db, $_POST['summation']);
    $post = mysqli_real_escape_string($db, $_POST['post']);
    $editid = $_POST['updateid'];

    $query = "UPDATE aktuellt
                SET aHeadline ='$headline',aPost = '$post', aSummation = '$summation'
                WHERE aId =". $editid;
    $result = mysqli_query($db,$query);
    header("Location: aktuelltSkapaPost.php?editid=".$editid);
}

include "header.php"
?>
<section class="CreateAktuellt">
<h1>Uppdatera <?php echo $row['aHeadline']; ?></h1>
<form class="createPost" action="aktuelltUpdate.php" method="post">
    <input type="hidden" name="updateid" value="<?php echo $row['aId']; ?>"/>
    <input id="headline" type = "text" name="headline" placeholder="Headline"  value=" <?php echo $row['aHeadline'];?>">
    <textarea name ="summation" maxlength = "1200"  rows="20" cols="50" placeholder="Skriv summering här:"><?php echo $row['aSummation'];?></textarea>
    <textarea name ="post" maxlength = "10000"  rows="50" cols="75" placeholder="Skriv hela texten här: "><?php echo $row['aPost'];?></textarea>
    <p><input class="btn" type="submit" value="Uppdatera"/></p>
</form>
</section>
<?php
include "footer.php"
?>
<script type="text/javascript" src="/java/jquery-3.2.1.min.js"></script>
<script src="/java/js.js" type="text/javascript"></script>