<?php
$activePage = 'index.php';
$headerWhite = true;
// $noHero = true;
include '_header.php';

?>
<div class="section-padding p-big-sides">
  <div class="circle-pattern-1"></div>
  <div class="container-big row justify-space-around flex-align-start">
    <div class="col-md-9 col-lg-5 white about-image row">
      <div class="col-6">
        <div class="img bg-ca-magenta row justify-center flex-align-center">
          <img src="assets/icons/sicher.svg" alt="">
          <div class="h4 uppercase">
            Sicher
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="img bg-ca-blue row justify-center flex-align-center">
          <img src="assets/icons/schnell.svg" alt="">
          <div class="h4 uppercase">
            Schnell
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="bg-ca-yellow img row justify-center flex-align-center">
          <img src="assets/icons/sauber.svg" alt="">
          <div class="h4 uppercase">
            Sauber
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="img bg-ca-green row justify-center flex-align-center">
          <img src="assets/icons/service.svg" alt="">
          <div class="h4 uppercase">
            Service
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 column justify-center white" style="margin-left: 1.5rem;">
      <div class="icon-heading">
        <div class="text-marked">
          Sicher - Schnell - Sauber - Service
        </div>
        <h2>IHR 4S TEAM</h2>
        <i class="fa fa-sparkle"></i>
      </div>
      <p class="lead">
        Wir beraten kompetent und zuverlässig und suchen die bestmögliche Lösung für die unterschiedlichsten Reinigungsanforderungen. Putzen wie die Profis mit Leidenschaft, Einsatzfreude, Nachhaltigkeit, Umweltbewusstsein, Teamgeist, Verlässlichkeit und Genauigkeit.
      </p>
      <em class="bold lead">“Für jede Jahreszeit der richtige Partner”</em>
    </div>
  </div>
</div>


<?php include 'components/services.php'; ?>

<div
  class="gradient- bg-gradient-3 row flex-align-center justify-center"
  style=""
>
  <div class="h4 white bold">
    “VERTRAUEN IST DER ANFANG – ZUSAMMENARBEIT DER ERFOLG”
  </div>
</div>

<?php include 'components/gallery.php'; ?>

</section>
<?php include '_footer.php';?>
