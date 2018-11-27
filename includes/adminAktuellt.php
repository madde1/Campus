<?php
/**
 * Created by PhpStorm.
 * User: madde
 * Date: 2018-11-26
 * Time: 13:43
 */
session_start();
$db =mysqli_connect('localhost:3307','root','Melvin2012','CampusDB');
mysqli_select_db($db, "CampusDB") or die("Could not select database");
?>
<?php
$query1 = "SELECT * FROM aktuellt ORDER BY aId ASC";

$heading = mysqli_query($db,$query1);
//Loopar igenom arrayen som innehåller alla blogg inlägg

while ($row1 = mysqli_fetch_array($heading)) {
    ?>
    <h3><?php echo $row1['aHeadline'];?></h3>
    <p><a href="aktuelltUpdate.php?editid=<?php echo $row1['aId'];?>">Uppdatera</a></p><p><a href="aktuelltDelete.php?deleteid=<?php echo $row1['aId'];?>">Ta bort</a></p>

    <?php
}
?>

<a href="createBlogPosts.php"><p>Skapa nytt blogg inlägg</p></a>
<script type="text/javascript" src="/java/jquery-3.2.1.min.js"></script>
<script src="/java/js.js" type="text/javascript"></script>