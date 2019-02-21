<?php
include 'services.php';
$pages = array();
$pages["index.php"] = [
  "nav" => "Home",
];

$pages["services.php"] = [
  "nav" => "Unsere Leistungen",
  "pre-title" => '',
  'title' => '',
  'hero-img' => [
    'assets/imgs/open-hours.jpg',
    'assets/imgs/open-hours2.jpg'
  ],
  'sub-menu' => $servicesLinks,
];

$pages["about-us.php"] = [
  "nav" => "Unser Team",
  "pre-title" => '',
  'title' => '',
  'hero-img' => [
    'assets/imgs/aussen-reinigung.jpg',
  ],
];

$pages["contact.php"] = [
  "nav" => "Kontakt",
  "pre-title" => '',
  "title" => "",
  'text' => '',
  'hero-img' => [
    'assets/imgs/preise.jpg',
    'assets/imgs/lobby.jpg'
  ],
];

$pages["contact.php"] = [
  "nav" => "Kontakt",
  "pre-title" => 'Nehmen Sie mit uns Kontakt auf',
  "title" => "Carlovers <span class='loc-title'></span>",
  'text' => '',
  'hero-img' => [
    'assets/imgs/spezial-reinigung.jpg',
    'assets/imgs/lobby.jpg'
  ],
];
$pages["imprint.php"] = [
  "nav" => "Impressum",
  'pre-title'=>'',
  "title" => "Impressum",
  'text' => '',
  'hero-img' => [
    'assets/images/datenschutz.jpg',
    'assets/images/bg_sw.jpg'
  ],
];
$pages["privacy-policy.php"] = [
  "nav" => "Datenschutz",
  'pre-title'=>'',
  "title" => "Datenschutz",
  'text' => '',
  'hero-img' => [
    'assets/images/datenschutz.jpg',
    'assets/images/bg_sw.jpg'
  ],
];
?>
