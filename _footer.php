<footer class="footer row flex-align-end justify-start">
  <div class="f-bg bg-img"></div>
  <div class="container-big row justify-center">
    <div class="row col-el-8 col-lg-10 justify-center">
      <div class="col-md-6 col-ml-4 row flex-align-stretch">
        <div class="card__icon fw">
          <div class="icon">
            <i class="fa fa-map-marker-alt"></i>
          </div>
          <h5>Adresse</h5>
          <p>Schillingsdorfer Strasse 30</p>
          <p>8010 Kainbach bei Graz</p>
        </div>
      </div>
      <div class="col-md-6 col-ml-4 row flex-align-stretch">
        <div class="card__icon fw">
          <div class="icon">
            <i class="fa fa-phone"></i>
          </div>
          <h5>Telefon</h5>
          <p>+43 664 145 11 15</p>
          <p>+43 664 145 11 15</p>
        </div>
      </div>
      <div class="col-md-6 col-ml-4 row flex-align-stretch">
        <div class="card__icon fw">
          <div class="icon">
            <i class="fa fa-envelope"></i>
          </div>
          <h5>E-Mail</h5>
          <p>buero@clean-world.at</p>
        </div>
      </div>
    </div>
  </div>
  <p class="col-md-12 white copyright row justify-center">
    © CW-Gebäudereinigung GmbH
    <script>
      document.querySelector('.copyright').innerHTML += new Date().getFullYear();
    </script>
    - all rights reserved.
  </p>
</footer>

<?php if(isset($sliderHero)): ?>
  <script src="js/slider.js" type="text/javascript"></script>
<?php endif; ?>

<?php if(isset($form)): ?>
  <!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
  <script type="text/javascript" src="vendor/form/axios.min.js"></script>
  <script type="text/javascript" src="vendor/form/validate.min.js"></script>
  <script type="text/javascript" src="js/dist/form.js"></script>
  <script src='https://www.google.com/recaptcha/api.js?hl=de'></script>
<?php endif; ?>

<?php if(isset($map)): ?>
<script type="text/javascript" src="js/src/google-map.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAiY-rhN3OotImGZxVniwegnAI2LQEUaY&callback=initMap"
  type="text/javascript">
</script>
<?php endif; ?>

</body>
</html>
