<footer class="footer bg-white">

  <p class="col-md-12 mp secondary-dark bg-white copyright-text row justify-center">
    © CW-Gebäudereinigung GmbH
    <script>
      document.querySelector('.copyright-text').innerHTML += new Date().getFullYear();
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
  <script type="text/javascript" src="js/form.js"></script>
  <script src='https://www.google.com/recaptcha/api.js?hl=de'></script>
<?php endif; ?>

<?php if(isset($map)): ?>
<script type="text/javascript" src="js/google-map.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAiY-rhN3OotImGZxVniwegnAI2LQEUaY&callback=initMap"
  type="text/javascript">
</script>
<?php endif; ?>

</body>
</html>
