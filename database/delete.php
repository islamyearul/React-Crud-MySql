<?php
include('connection');

$id = $_GET['id'];
$sql = "DELETE FROM students WHERE id = ''$id";

$result = '';
if( $conn->query($sql)=== true ){
    $result = "Data Delete Succes";
}else{
    $result = 'Data Update'.  mysqli_error($conn)  ;
}


json_encode($result);
mysqli_close($conn);