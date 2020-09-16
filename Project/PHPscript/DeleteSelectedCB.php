<?php
$user = 'root';
$pass = '';
$db = 'swproducts';
$db = new mysqli('localhost', $user, $pass, $db) or die("no connecto");

$chCb=$_POST['chCb2'];

$sql= "DELETE FROM products1 WHERE id IN (".$chCb.")";
$sqlsend = $db->query($sql);

$error = mysqli_errno($db);

echo $chCb;
?>