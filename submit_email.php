<?php
//
//
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
//    $name = strip_tags(trim($_POST["name"]));
//    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
//    $phone = strip_tags(trim($_POST["phone"]));
//    $message = strip_tags(trim($_POST["message"]));
//
//    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//        // Handle the error - invalid email
//        echo "Invalid email address.";
//        exit;
//    }
//
//    $to = 'hussainarusa18@gmail.com'; // Replace with your email
//    $subject = 'New Contact Form Submission';
//    $email_content = "Name: $name\n";
//    $email_content .= "Email: $email\n";
//    $email = $_POST['email']; // The key 'email' corresponds to the 'name' attribute of your form input.
//    $email_content .= "Phone: $phone\n";
//    $email_content .= "Message:\n$message\n";
//
//    $headers = 'From: arusacodes.com'; // Replace with a valid 'from' address
//
//    if (mail($to, $subject, $email_content, $headers)) {
//        echo "Email sent successfully.";
//    } else {
//        echo "Email sending failed.";
//    }
//}
////?>
<!---->
<?php
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
//    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
//    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
//        // Email is valid, proceed to send
//        sendEmail($email);
//    } else {
//        echo "Invalid email address.";
//    }
//}
//
//function sendEmail($email) {
//    $to = 'hussainarusa18@gmail.com'; // Replace with your email
//    $subject = 'New Email Submission';
//    $message = 'Email: ' . $email;
//    $headers = 'From: http://localhost:63342/arusas-coding-dojo/portfolio.html?_ijt=ruh95c6tuv2kghh2cc3c4pbi65'; // Replace with a valid 'from' address
//
//    if (mail($to, $subject, $message, $headers)) {
//        echo "Email sent successfully.";
//    } else {
//        echo "Email sending failed.";
//    }
//}
//?>

