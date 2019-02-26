<?php
$activePage = 'about-us.php';
$headerWhite = true;
$map = true;
include '_header.php';


$team = [
  [
    'img' => 'assets/team/andrea-heidinger.jpg',
    'name' => 'Andrea Heidinger',
    'position' => 'Geschäftsführung',
    'email' => 'buero@clean-world.at'
  ],
  [
    'img' => 'assets/team/vera-schenk.jpg',
    'name' => 'Vera Schenk',
    'position' => 'Assistentin der Geschäftsführung',
    'email' => 'vs@clean-world.at',
  ],
  [
    'img' => 'assets/team/gerlinde-fladerer.jpg',
    'name' => 'Gerlinde Fladerer',
    'position' => 'Assistentin',
    'email' => 'gf@clean-world.at'
  ],
]
?>


<div class="p-big">
  <div class="circle-pattern-2 end-circle-el bg-img-contain <?php echo isset($noServHeading) ? 'end-circle-el' : ''; ?>"></div>
  <div class="container row flex-align-stretch justify-center">
    <?php foreach ($team as $person): ?>
      <div class="col-lg-4 col-md-6 row flex-align-stretch justify-center">
        <figure class="team-member column justify-space-between flex-align-center shadow-small">
          <img src="<?php echo $person['img']; ?>" />
          <figcaption class="bg-ca-yellow white fw align-center column justify-center flex-align-center">
            <h3 class="uppercase thin"><?php echo $person['name']; ?></h3>
            <div class="lead bold italic">
              <?php echo $person['position']; ?>
            </div>
            <a href="<?php echo $person['email']; ?>">
              <?php echo $person['email']; ?>
            </a>
          </figcaption>
        </figure>
      </div>
    <?php endforeach; ?>
  </div>
</div>

<?php include 'components/contact.php'; ?>



</section>
<?php include '_footer.php';?>
