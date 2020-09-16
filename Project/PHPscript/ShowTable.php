<?php
$user = 'root';
$pass = '';
$db = 'swproducts';
$db = new mysqli('localhost', $user, $pass, $db) or die("no connecto");

$qr = "SELECT * FROM products1";
$res = mysqli_query($db, $qr);

echo "<table>";

while($getrow = mysqli_fetch_assoc($res))
{
echo "<tr>";
echo "<td></td>";
echo "<td>SKU</td>";
echo "<td>Name</td>";
echo "<td>Price</td>";
echo "<td>Size</td>";
echo "</tr>";
	
echo "<tr>";
echo "<td><input type=\"checkbox\" value=\"{$getrow['id']}\" name=\"IDref\"></td>";
echo "<td>{$getrow['SKU']}</td>";
echo "<td>{$getrow['Name']}</td>";
echo "<td>{$getrow['Price']}</td>";
echo "<td>{$getrow['Size']}</td>";
echo "</tr>";
}

echo "</table>";

?>