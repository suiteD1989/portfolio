<?php  
	
	$name = '';
	$email = '';
	$message = '';

	if (isset($_POST['name'])) {
		$name = $_POST['name'];
	}
	if (isset($_POST['email'])) {
		$email = $_POST['email'];
	}
	if (isset($_POST['message'])) {
		$message = $_POST['message'];
	}
	
	$formcontent = "From: $name \n Message: $message";
	$recipient = "daraghcassidy89@gmail.com";
	$subject = "Contact From Portfolio Site!";
	$mailheader = "From: $email \r\n";

	mail($recipient, $subject, $formcontent, $mailheader) 
	or die("Error: check vars for name, email and message. "
	."name: ".$name."email: ".$email."message: ".$message);

?>