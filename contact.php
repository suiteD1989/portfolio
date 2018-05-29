<?php  
	
	error_reporting(-1);
	ini_set('display_errors', 'On');
	set_error_handler("var_dump");
	
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
	$subject = "Enquiery from $email";
	$mailheader = "From: $email \r\n";

	mail($recipient, $subject, $formcontent, $mailheader); 

?>