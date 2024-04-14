<?php
include '../config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = $_POST['userID'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $role = $_POST['role'];

    $sql = "UPDATE users SET username='$username', password='$password', role='$role' WHERE userID='$userID'";
    if ($conn->query($sql) === TRUE) {
        echo "User updated successfully";
    } else {
        echo "Error updating user: " . $conn->error;
    }
} else {
    $userID = $_GET['id'];
    $sql = "SELECT * FROM users WHERE userID='$userID'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        ?>
        <h2>Update User</h2>
        <form method="post" action="">
            <input type="hidden" name="userID" value="<?php echo $row['userID']; ?>">
            Username: <input type="text" name="username" value="<?php echo $row['username']; ?>"><br>
            Password: <input type="password" name="password"><br>
            Role: <select name="role">
                <option value="admin" <?php if ($row['role'] == 'admin')
                    echo 'selected'; ?>>Admin</option>
                <option value="staff" <?php if ($row['role'] == 'staff')
                    echo 'selected'; ?>>Staff</option>
            </select><br>
            <input type="submit" value="Update">
        </form>
        <?php
    } else {
        echo "User not found";
    }
}

$conn->close();
?>