<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check CSRF token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die('CSRF token validation failed');
    }

    // Validate input data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name === false || $email === false || $phone === false || $message === false) {
        die('Invalid input');
    }

    // Example of using prepared statements for database insertion
    $mysqli = new mysqli('localhost', 'username', 'password', 'database');

    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
    }

    $stmt = $mysqli->prepare('INSERT INTO submissions (name, email, phone, message) VALUES (?, ?, ?, ?)');
    if ($stmt === false) {
        die('Prepare failed: ' . $mysqli->error);
    }

    $stmt->bind_param('ssss', $name, $email, $phone, $message);
    if (!$stmt->execute()) {
        die('Execute failed: ' . $stmt->error);
    }

    $stmt->close();
    $mysqli->close();

    echo 'Form submitted successfully';
}

