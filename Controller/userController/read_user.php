<?php
include '../config.php';
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "id: " . $row["userID"] . " - Username: " . $row["username"] . " - Role: " . $row["role"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();