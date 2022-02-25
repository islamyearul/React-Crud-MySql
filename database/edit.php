<?php
include('connection');
$_POST = json_decode(file_get_contents("php://input"), true);

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$result = '';

$sql = $conn->query("UPDATE students SET name = '$name', email = '$email', phone='$phone' WHERE id = $id");

if(mysqli_query($conn, $sql)){
    $result = 'Data Update Success';
}else{
    $result = 'Data Update'.  mysqli_error($conn)  ;
}

json_encode($result);
mysqli_close($conn);


?>