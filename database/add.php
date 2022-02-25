<?php
include('connection');

$_POST = json_decode(file_get_contents("php://input"), true);

$name = addcslashes(htmlentities($_POST['name']));
$email = addcslashes(htmlentities($_POST['email']));
$phone = addcslashes(htmlentities($_POST['phone']));

if( $_POST === null){
    $resul = "";
} else{
    $sql = $conn->query("INSERT INTO students VALUES ('', '$name', '$email', '$phone')");

}

if($sql === true){
    $resul = "New record created successfully";
}else{
    $resul = "Error: " . $sql . "<br>" . $conn->error;
}

echo json_encode($result);

$conn->close();




?>