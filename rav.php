<?php
$name = $_GET['name'];
$result = $_GET['result'];
$IQ = $_GET['IQ'];

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "iq tester";

$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
} else {
    // Define the SQL query to select data from the database
    $query = "SELECT * FROM details WHERE name = ? AND result = ? AND IQ = ?";
    
    // Prepare the SQL statement
    $stmt = $connection->prepare($query);
    
    if (!$stmt) {
        die("Prepare failed: " . $connection->error);
    }
    
    // Bind the parameters and execute the query
    $stmt->bind_param("sii", $name, $result, $IQ);
    
    // Execute the query
    $stmt->execute();
    
    // Get the results
    $result = $stmt->get_result();
    
    // Fetch the data from the result
    while ($row = $result->fetch_assoc()) {
        // Access the data here
        $name = $row['name'];
        $result = $row['result'];
        $IQ = $row['IQ'];
        
        echo "Name: $name, Result: $result, IQ: $IQ<br>";
    }
    
    // Close the statement and the connection
    $stmt->close();
    $connection->close();
}
?>
