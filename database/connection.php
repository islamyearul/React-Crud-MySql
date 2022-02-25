<?php
$conn = new mysqli("localhost", "root", "", "react_crud");


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


?>