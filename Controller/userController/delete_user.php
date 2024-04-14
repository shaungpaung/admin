<?php
include '../config.php';

$userID = $_GET['id'];
$sql = "DELETE FROM users WHERE userID='$userID'";

if ($conn->query($sql) === TRUE) {
    echo "User deleted successfully";
} else {
    echo "Error deleting user: " . $conn->error;
}

$conn->close();