<?php
$page = [
  "nav" => "Jobbörse",
  "title" => "Jobbörse",
  'text' => 'BEWERBEN SIE SICH JETZT!',
  'hero-graphic' => 'eco.svg',
  'hero-gradient' => 'bg-gradient-2'
];

$headerWhite = true;
include '_header.php';

?>
<section class="bg-red">
  <div class="container-middle">
    <h2 class="align-center h-lg h-decor" style="margin: 60px 0 20px; ">Bewerbung</h2>
    <p class="align-center">
      Wir sind laufend auf der Suche nach neuen Mitarbeitern/innen und freuen uns auf Ihre Bewerbung per Post, per Email oder direkt hier online auf unserer Webseite!
    </p>
    <h5 class="align-center uppercase regular">Bewerben Sie sich jetzt!</h5>
  </div>
</section>
<section>
  <div class="container-middle-big">
    <form enctype="multipart/form-data" action="fnc/mail-jobboerse.php"
      id="form-jobboerse" data-validate
      class="row flex-align-start justify-center form"
    >
      <div class="form-section row flex-align-start justify-start">
        <div class="col-md-6 form-sonstige-container">
          <label>Ich bewerbe mich als...</label>
          <div class="col-12 nop">
            <input id="ba-rk" type="radio" name="bewerbe-als" value="Reinigungskraft" required>
            <label for="ba-rk"><span></span>Reinigungskraft</label>
          </div>
          <div class="col-12 nop">
            <input id="ba-aa" type="radio" name="bewerbe-als" value="Mitarbeiter für Außenanlagen" required>
            <label for="ba-aa"><span></span>Mitarbeiter/in für Außenanlagen</label>
          </div>
          <div class="col-12 nop">
            <input id="ba-wd" type="radio" name="bewerbe-als" value="Mitarbeiter für Winterdienst" required>
            <label for="ba-wd"><span></span>Mitarbeiter/in für Winterdienst</label>
          </div>
          <div class="col-12 nop">
            <input class="sons-checkbox" type="radio" data-target="#ba-sonsi" id="ba-sons" name="bewerbe-als" value="sonstige" required>
            <label for="ba-sons"><span></span>Sonstige</label>
            <input class="sons-input" type="text" data-target="#ba-sons" id="ba-sonsi" value="" disabled hidden>
          </div>
        </div>


        <div class="col-md-6 form-sonstige-container">
          <label>Eintrittsdatum:</label>
          <div class="col-12 nop">
            <input id="ed-as" type="radio" name="eintrittsdatum" value="ab sofort möglich" required>
            <label for="ed-as"><span></span>ab sofort möglich</label>
          </div>
          <div class="col-12 nop">
            <input class="sons-checkbox" data-target="#ed-abi" id="ed-ab" type="radio" name="eintrittsdatum" value="ab" required>
            <label for="ed-ab"><span></span>ab</label>
            <input class="sons-input" data-target="#ed-ab" type="text" id="ed-abi" value="" disabled hidden>
          </div>
        </div>
      </div>

      <!-- Persönliche Informationen -->
      <div class="form-section row flex-align-start justify-start">
        <h5 class=" uppercase col-12">Persönliche Informationen</h5>
        <div class="col-md-6">
          <div class="input-container">
            <input id="name" type="text" name="name" required>
            <label for="name">Vorname</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="surname" type="text" name="surname" required>
            <label for="surname">Nachname</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="geb-name" type="text" name="geb-name" required>
            <label for="geb-name">Geburtsname</label>
          </div>
        </div>

        <div class="col-md-6 row flex-align-center justify-start">
          <label class="fw block">Geburtstag</label>
          <div>
            <select id="day" name="bday-day" required>
              <option disabled selected>Tag</option>
              <?php
                for ($i = 1; $i <= 31; $i++) {
                  echo "<option value=\"$i\">$i</option>";
                }
              ?>
            </select>
          </div>
          <div>
            <select id="month" name="bday-month" required>
              <option disabled selected>Monat</option>
              <?php
              setlocale(LC_ALL, 'de_DE@euro', 'de_DE', 'deu_deu');
              for ($m=1; $m<=12; $m++) {
                $month = utf8_encode (strftime('%B', mktime(0,0,0,$m, 1, date('Y'))));
                echo "<option value=".$month.">".$month."</option>";
              }
              ?>
            </select>
          </div>
          <div>
            <select id="year" name="bday-year" required>
              <option disabled selected>Jahr</option>
              <?php
              $date = (int) date('Y');
              $numYears = 100;
              for ($i=$date; $i >= $date - $numYears; $i--) {
                echo "<option value=\"$i\">$i</option>";
              }
              ?>
            </select>
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-container">
            <input id="soz-number" type="number" name="soz-number" required value="">
            <label for="soz-number">Sozialversicherungsnummer</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="staatsb" type="text" name="staatsb" required>
            <label for="staatsb">Staatsbürgerschaft</label>
          </div>
        </div>

        <div class="col-md-6">
          <label>Familienstand</label>
          <div class="col-12 nop">
            <input id="fa-le" type="radio" name="familienstand" value="ledig" required>
            <label for="fa-le"><span></span>ledig</label>
          </div>
          <div class="col-12 nop">
            <input id="fa-vh" type="radio" name="familienstand" value="verheiratet" required>
            <label for="fa-vh"><span></span>verheiratet</label>
          </div>
          <div class="col-12 nop">
            <input id="fa-ge" type="radio" name="familienstand" value="geschieden" required>
            <label for="fa-ge"><span></span>geschieden</label>
          </div>
          <div class="col-12 nop">
            <input id="fa-ve" type="radio" name="familienstand" value="verwitwet" required>
            <label for="fa-ve"><span></span>verwitwet</label>
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-container">
            <textarea id="children" rows="1" type="text" name="children" required></textarea>
            <label for="children">Kinder (Name, Geb.Datum)</label>
          </div>
        </div>
      </div>

      <!-- Kontaktinformationen -->
      <div class="form-section row flex-align-start justify-start">
        <h5 class="uppercase col-12">Kontaktinformationen</h5>
        <div class="col-md-6">
          <div class="input-container">
            <input id="street" type="text" name="street" required>
            <label for="street">Straße / Hausnummer</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="ort" type="text" name="ort" required>
            <label for="ort">PLZ / Ort</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="tel" type="tel" name="tel" required>
            <label for="tel">Telefonnummer</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <input id="email" type="email" name="email" required>
            <label for="email">Email</label>
          </div>
        </div>
      </div>

      <div class="form-section row flex-align-start justify-start">
        <h5 class="uppercase col-12">Kompetenzen</h5>
        <div class="col-md-6">
          <label>Führerschein</label>
          <div class="col-12 nop">
            <input id="fue-ye" type="radio" name="drivers-licence" value="ja" required>
            <label for="fue-ye"><span></span>Ja</label>
          </div>
          <div class="col-12 nop">
            <input id="fue-no" type="radio" name="drivers-licence" value="nein" required>
            <label for="fue-no"><span></span>Nein</label>
          </div>
        </div>

        <div class="col-md-6">
          <div class="input-container">
            <input id="gruppe" type="text" name="driver-group" required>
            <label for="gruppe">Führerschein Gruppe</label>
          </div>
        </div>



        <div class="col-md-6">
          <div class="input-container">
            <textarea id="ausbildung" rows="1" type="text" name="ausbildung" required></textarea>
            <label for="ausbildung">Ausbildung (Wo? Als?)</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <textarea id="letzte-b" rows="1" type="text" name="last-employment" required></textarea>
            <label for="letzte-b">Letzte Beschäftigung (Wann? Wo? Als?)</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <textarea id="derzeit-b" rows="1" type="text" name="cur-employment" required></textarea>
            <label for="derzeit-b">Derzeitige Beschäftigung</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-container">
            <textarea id="ziele" rows="1" type="text" name="ziele" required></textarea>
            <label for="ziele">Ziele</label>
          </div>
        </div>
      </div>

      <div class="col-12">
        <div class="input-container">
          <input id="gehalt" type="text" name="gehalt" required>
          <label for="gehalt">Gehaltsvorstellungen Brutto/Std. bzw. Monatslohn</label>
        </div>
      </div>

      <div class="col-12">
        <input id="datenschutz" type="checkbox" name="datenschutz" value="true" required>
        <label for="datenschutz"><span></span>
          Ich bin damit einverstanden, dass meine persönlichen Daten zwecks Bearbeitung meiner Anfrage bei Putzprofi Gebäudereinigung GmbH, oder einem von ihr beauftragten Dienstleister gespeichert und verarbeitet werden. Die Datenspeicherung ist ausschließlich für die Bearbeitung Ihrer Anfrage notwendig; Ihre Daten werden nicht an Dritte und insbesondere auch nicht zu Werbezwecken verwendet und weitergegeben.
          <a href="http://www.putzprofi.co.at/putzprofi/wp-page/datenschutz/">
            Erfahren Sie mehr über den Datenschutz.
          </a>
        </label>
      </div>

      <button type="submit" class="btn-gradient">Senden</button>
      <div class="msg-box col-12"></div>
    </form>
  </div>
</section>
<script type="text/javascript" src="vendor/form/autosize.min.js"></script>
<script type="text/javascript" src="vendor/form/validate.min.js"></script>
<script type="text/javascript" src="js/src/form-jobboerse.js"></script>


</section>
<?php include '_footer.php';?>
