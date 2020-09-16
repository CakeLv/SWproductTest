<?php
$user = 'root';
$pass = '';
$db = 'swproducts';
$db = new mysqli('localhost', $user, $pass, $db) or die("no connecto");

$sku=$_POST['psku'];
$name=$_POST['pname'];
$price=$_POST['pprice'];
$size=$_POST['test'];



$sql= "INSERT INTO products1(SKU, Name, Price, Size)
VALUES ('"  .$sku.  "', '"  .$name.  "', '"  .$price.  "', '"  .$size.  "')";
$sqlsend = $db->query($sql);

$error = mysqli_errno($db);
if(!$sqlsend && $error="1062")
{
echo "SKU already exists";

}
else if(!$sqlsend){echo"Entry was NOT added";}
else echo "Entry was Added";
?>