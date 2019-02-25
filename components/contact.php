<?php
$form = true;
?>

<section class="contact-section">
  <div class="bg-gradient-contact">
  </div>
  <div class="container-big row justify-center justify-space-between-lg flex-align-center">
    <div class=" justify-center col-lg-6 col-el-7 mp nopl nopr">
      <img class="col-md-10 col-lg-12 nop" src="assets/graphics/contact.png" alt="">
    </div>
    <div class="col-md-8 col-lg-5 col-el-4 mp card">
      <form  id="contact-form"
        enctype="multipart/form-data" action="fnc/mail.php"
        class="row flex-align-start justify-center form-small"
      >
        <h2 class="fw uppercase align-center trenner-bottom" data-aos="fade-up">
          <span>Kontakt</span>
        </h2>
        <div class="container row" data-aos="fade-up">
          <div class="col-md-6">
            <div class="input-container">
              <input id="name" type="text" name="name" required>
              <label for="name">Name*</label>
            </div>
          </div>

          <div class="col-md-6">
            <div class="input-container">
              <input id="email" type="email" name="email" required>
              <label for="email">E-Mail*</label>
            </div>
          </div>

          <div class="col-md-12">
            <div class="input-container">
              <textarea id="nachricht" rows="6" type="text" name="message" required style="width:100%"></textarea>
              <label for="nachricht">Nachricht*</label>
            </div>
          </div>
          <div class="col-12">
            <input id="datenschutz" type="checkbox" name="datenschutz" value="true" required>
            <label class="datenschutz" for="datenschutz"><span><svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 197.99 172.49"><path class="test22" fill="none" stroke="rgba(205,41,41,.9)" stroke-miterlimit="10" stroke-width="34" d="M25.11 69.95l42.98 67.45L179.26 26.23"></path></svg></span>
              Ich bin damit einverstanden, dass meine persönlichen Daten zwecks Bearbeitung meiner Anfrage bei <i class="accent bold loc-impressum"></i>, oder einem von ihr beauftragten Dienstleister gespeichert und verarbeitet werden. Die Datenspeicherung ist ausschließlich für die Bearbeitung Ihrer Anfrage notwendig; Ihre Daten werden nicht an Dritte und insbesondere auch nicht zu Werbezwecken verwendet und weitergegeben.
              <a href="privacy-policy.php" class="ca-magenta">
                Erfahren Sie mehr über den Datenschutz.
              </a>
            </label>
          </div>
          <div class="col-12 row flex-align-center justify-center">
            <div class="col-md-12 row flex-align-center justify-center">
              <div
                id='recaptcha'
                class="g-recaptcha"
                data-sitekey="6Le5NogUAAAAAKi3UIew5Wr9TB1AIZ8BIUKnF9ui"
                data-callback="handleSubmit"
                data-size="invisible"
              >

              </div>
              <button
                type="submit"
                class="btn-gradient"
                style="margin-right: 24px;"
              >
                Senden
              </button>
            </div>
            <!-- <div class="g-recaptcha" data-sitekey="6LfiG2kUAAAAAL3rYWqzRjRlmBRt25nEbD6rrLUr"></div> -->
          </div>
          <div class="msg-box col-12"></div>
        </div>
      </form>
    </div>
  </div>
</section>
