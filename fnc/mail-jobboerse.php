<?php
header('Content-Type: text/html; charset=UTF-8');
use PHPMailer\PHPMailer\PHPMailer;
include_once "PHPMailer/PHPMailer.php";
include_once "PHPMailer/Exception.php";
include_once "PHPMailer/SMTP.php";

$message_success = 'Ihre Nachricht wurde erfolgreich übertragen und wird baldmöglichst beantwortet.';
if ( $_SERVER['REQUEST_METHOD'] == 'POST' )  {
  $bewerbeAls = isset( $_POST['bewerbe-als']) ? $_POST['bewerbe-als'] : '';
  $eintrittsdatum = isset( $_POST['eintrittsdatum']) ? $_POST['eintrittsdatum'] : '';

  $name = isset( $_POST['name']) ? $_POST['name'] : '';
  $surname = isset( $_POST['surname']) ? $_POST['surname'] : '';
  $geburtname = isset( $_POST['geb-name']) ? $_POST['geb-name'] : '';
  $bdayDay = isset( $_POST['bday-day']) ? $_POST['bday-day'] : '';
  $bdayMonth = isset( $_POST['bday-month']) ? $_POST['bday-month'] : '';
  $bdayYear = isset( $_POST['bday-year']) ? $_POST['bday-year'] : '';

  $sozialVN = isset( $_POST['soz-number']) ? $_POST['soz-number'] : '';
  $staatsbuergerschaft = isset( $_POST['staatsb']) ? $_POST['staatsb'] : '';
  $familienstand = isset( $_POST['familienstand']) ? $_POST['familienstand'] : '';
  $kinder = isset( $_POST['children']) ? $_POST['children'] : '';

  $street = isset( $_POST['street']) ? $_POST['street'] : '';
  $ort = isset( $_POST['ort']) ? $_POST['ort'] : '';
  $tel = isset( $_POST['tel']) ? $_POST['tel'] : '';
  $email = isset( $_POST['email']) ? $_POST['email'] : '';

  $driversLicence = isset( $_POST['drivers-licence']) ? $_POST['drivers-licence'] : '';
  $driverGroup = isset( $_POST['driver-group']) ? $_POST['driver-group'] : '';

  $ausbildung = isset( $_POST['ausbildung']) ? $_POST['ausbildung'] : '';
  $lastEmployment = isset( $_POST['last-employment']) ? $_POST['last-employment'] : '';
  $curEmployment = isset( $_POST['cur-employment']) ? $_POST['cur-employment'] : '';
  $ziele = isset( $_POST['ziele']) ? $_POST['ziele'] : '';

  $gehalt = isset( $_POST['gehalt']) ? $_POST['gehalt'] : '';


  if ($bewerbeAls) {

    $mail = new PHPMailer();
    $subject = isset( $_POST['subject']) ? $_POST['subject'] . ' Putzprofi.at - Jobboerse' : 'Putzprofi.at - Jobboerse';


    // $mail->isSMTP();
    // $mail->Host = 'websmtp.world4you.com';
    // $mail->SMTPAuth = true;
    // $mail->Username = 'noreply@sky-media.at';
    // $mail->Password = 't3risTry@p';
    // $mail->SMTPSecure = 'tls';
    // $mail->Port = 25;

		// $mail->addAddress('office@sky-media.at');
		$mail->addAddress('markus.maelzer@gmail.com');
		// $mail->addAddress('office@putzprofi.co.at');
		$mail->setFrom($email, $name);

    // Emailformatierung
    $name = isset($name) ? "<b>Name</b>: $name<br>" : '';
    $surname = isset($surname) ? "Nachname: $surname<br>" : '';
    $geburtname = isset($geburtname) ? "Geburtsname: $geburtname<br>" : '';
    $geburtstag = isset($bdayDay) && isset($bdayDay) && isset($bdayDay) ?
      'Geburtstag: '. $bdayDay .'. '. $bdayMonth .' '. $bdayYear : '';
    $sozialVN = isset($sozialVN) ? "Sozialversicherungsnummer: $sozialVN<br>" : '';
    $staatsbuergerschaft = isset($staatsbuergerschaft) ? "Staatsbürgerschaft: $staatsbuergerschaft<br>" : '';
    $familienstand = isset($familienstand) ? "Familienstand: $familienstand<br>" : '';
    $kinder = isset($familienstand) ? "Kinder: $familienstand<br>" : '';

    $street = isset($street) ? "Straße: $street<br>" : '';
    $ort = isset($ort) ? "Ort: $ort<br>" : '';
    $tel = isset($tel) ? "Telefonnummer: $tel<br>" : '';
    $email = isset($email) ? "Email: $email<br>" : '';

		$driversLicence = isset($driversLicence) ? "Führerschein: $driversLicence<br>" : '';
		$driverGroup = isset($driverGroup) ? "FührerscheinGruppe: $driverGroup<br>" : '';

    $ausbildung = isset($ausbildung) ? "Ausbildung: $ausbildung<br>" : '';
    $lastEmployment = isset($lastEmployment) ? "Letzte Beschäftigung: $lastEmployment<br>" : '';
    $curEmployment = isset($curEmployment) ? "Derzeitige Beschäftigung: $curEmployment<br>" : '';
    $ziele = isset($ziele) ? "Ziele: $ziele<br>" : '';

    $gehalt = isset($gehalt) ? "Wunschgehalt: $gehalt<br>" : '';

    $body = "
      $name $surname $geburtname $geburtstag <br> $sozialVN $staatsbuergerschaft $familienstand $kinder
      $street $ort $tel $email <br> $driversLicence $driverGroup <br>
      $ausbildung $lastEmployment $curEmployment $ziele <br>
      $gehalt
    ";

    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body = $body;

    if($mail->send()) {
      echo $message_success;
    } else {
			// header('HTTP/1.1 500 Internal Server Booboo');
      echo 'fail';
    }
  } else {
		header('HTTP/1.1 500 Internal Server Booboo');
    echo 'something caused an error';
  }
}

?>
