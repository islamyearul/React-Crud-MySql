<?php
include('connection.php');


$sql = $conn->query("SELECT * FROM students");
$result = array();

    if($data = mysqli_fetch_assoc($sql)){
        $result[] = $data;
    }


echo json_encode($result);
mysqli_close($conn);



?>