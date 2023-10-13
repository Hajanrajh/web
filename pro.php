<?php

$name = $_POST['name'];
$about = $_POST['about'];
$result = $_POST['result'];
$IQ= $_POST['IQ'];

//database connection
$servername="localhost";
$username="root";
$password="";
$database="iq tester";

$connection=new mysqli($servername,$username,$password,$database);

if($connection->connect_error){
    die("connection failed: ". $connection->connect_error);

}else{
    $stmt= $connection->prepare("insert into details(name,about,result,IQ)values(?,?,?,?)");

    $stmt->bind_param("siis",$name,$result,$IQ,$about);
    $stmt->execute();
    $stmt->close();
    $connection->close();
}

?>