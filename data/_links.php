<?php
include 'services.php';
$pages = array();
$pages["index.php"] = [
  "nav" => "Home",
  'title' => 'Willkommen bei <span>Clean World</span>',
  'text' => '
    Wir helfen Ihnen bei allen Tätigkeiten rund um Haus, Garten, Büro und Wohnen!
    Wir sind Ihr zuverlässiger Partner für Qualität und Kundenorientierung!
  ',
];

$pages["services.php"] = [
  "nav" => "Unsere Leistungen",
  'title' => 'Unsere <span>Services</span>',
  "text" => '
    Wir reinigen für Sie mit langjähriger Erfahrung die unterschiedlichsten Bereiche, egal ob im geschäftlichen, öffentlichen oder privaten Umfeld
  ',
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
  "title" => "Kontakt",
  'text' => 'Nehmen Sie Kontakt mit uns auf',
  'hero-graphic' => 'eco.svg',
  'hero-gradient' => 'bg-gradient-2'
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
