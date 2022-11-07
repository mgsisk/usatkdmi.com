<?php

if (!$_POST || !empty($_POST['firstname'])) {
  header('Location: /join/');
  die;
}

$error = '';
$date = date('F j, Y');
$time = date('h:i a');
$_POST = array_map('trim', array_filter($_POST) + [
  'name' => '',
  'email' => '',
  'phone' => '',
]);

if (empty($_POST['name'])) {
  $error = 'Full name is required.';
} else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  $error = 'A valid email address is required.';
} else if (strlen(preg_replace('/\D+/', '', $_POST['phone'])) < 10) {
  $error = 'A phone number with area code is required.';
}

if ($error) {
  return;
}

mail(
  // 'usatkdm@yahoo.com',
  'me@mgsisk.com',
  'Promotional Offer Request',
  "Submitted by {$_POST['name']} on {$date} at {$time}",
  "From: {$_POST['name']} <{$_POST['email']}>
  X-Mailer: PHP/" . phpversion(),
  "-f{$_POST['email']}"
);

mail(
  "{$_POST['name']} <{$_POST['email']}>",
  'Welcome to USA Tae Kwon Do',
  implode("\n\n", [
    wordwrap('Thank you for your information. Join us at 125 Peekstock Rd, Kalamazoo, MI 49001 at your convenience to begin your free two week trial and start your journey to greater confidence, fitness, and health!', 60),
    wordwrap("You'll have access to our taekwondo and aerobic kickboxing programs during the free two week trial. Check our program schedule at https://usatkdmi.com/schedule/", 60),
    wordwrap('See you soon!', 60),
  ]),
  "From: Grand Master M'Hammed Bouabdellaoui <tkd@usatkdmi.com>
  X-Mailer: PHP/" . phpversion(),
  "-ftkd@usatkdmi.com"
);

header('Location: /thanks');
die;
