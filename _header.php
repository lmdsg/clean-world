<?php
header('Content-Type: text/html; charset=UTF-8');
include 'data/_links.php';
include 'fnc/helpers.php';

if(isset($activePage)) {
  $page = $pages[$activePage];
}
?>
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">

  <title><?php echo $page['nav']; ?></title>

  <link rel="shortcut icon" href="favicon.ico">
  <link rel="stylesheet" type="text/css" href="scss/index.min.css">
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/min/tiny-slider.js"></script>

  <script src="js/helpers.js" type="text/javascript"></script>

  <?php if(isset($gsap)): ?>
    <script type="text/javascript" src="vendor/gsap/TweenLite.min.js"></script>
    <script type="text/javascript" src="vendor/gsap/TimelineLite.min.js"></script>
    <script type="text/javascript" src="vendor/gsap/CSSPlugin.min.js"></script>
    <script type="text/javascript" src="vendor/gsap/EasePack.min.js"></script>
  <?php endif; ?>
  <script type="text/javascript" src="vendor/fontawesome/fontawesome.min.js"></script>
  <script type="text/javascript" src="vendor/fontawesome/custom-icon-pack.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.0/plugins/CSSPlugin.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.0/easing/EasePack.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.0/TweenLite.min.js"></script>
</head>
<body>
  <script type="text/javascript">
  // global var for the google map bcs of location class
    var map;
  </script>

<!-- LOADER   -->
<div class="loader__container">
  <div class="loader">
    <div class="loader__item loader__item-1"></div>
    <div class="loader__item loader__item-2"></div>
    <div class="loader__item loader__item-3"></div>
    <div class="loader__item loader__item-4"></div>
  </div>
</div>

<div class="cookie__popup hidden white">
  <div class="container row flex-align-center justify-center">
    <p class="col">
      Mit der Nutzung dieser Website erklären Sie sich damit einverstanden, dass wir Cookies verwenden.
      Weitere Informationen dazu finden Sie <a href="datenschutz.php">hier</a>.
    </p>
    <button class="btn text-uppercase cookie__close" data-text="Diese Nachricht nicht mehr anzeigen">Diese Nachricht nicht mehr anzeigen</button>
  </div>
</div>

<header>
  <div class="above-header row flex-align-center <?php echo $headerWhite ? 'white' : ''; ?>">
    <div class="col fh row justify-end flex-align-center nop hover-icon-container">
      <a href="tel:+436641451115" class="hover-icon">
        <div class="icon">
          <i class="fa fa-phone"></i>
        </div>
        <span>+43 664 / 1451115</span>
      </a>
      <a href="mailto:buero@clean-world.at" class="hover-icon">
        <div class="icon">
          <i class="fa fa-envelope"></i>
        </div>
        buero@clean-world.at
      </a>
    </div>
  </div>


  <div class="nopr nopt nopb row flex-align-center justify-space-between nav__container p-big-left">
    <div class="nav-button row flex-align-center justify-center pointer">
      <div class="nav-button__icon">
        <div class="nav-button__line"></div>
        <div class="nav-button__line"></div>
        <div class="nav-button__line"></div>
      </div>
    </div>
    <div class="logo-container row col flex-align-center">
      <a class="logo" href="index.php" title="Zur Startseite">
        <?php include 'assets/logo.svg'; ?>
      </a>
    </div>

    <nav>
      <div class="nav__content row flex-align-center justify-space-between">
        <ul class="row flex-align-center justify-center">
          <?php foreach($pages as $url=>$item): ?>
            <li class="row flex-align-stretch justify-start">
              <a class="row flex-align-center <?php if($url === $activePage || checkSubMenu($item, checkVar($activeTrigger))) echo ' active'; ?>"
                href="<?php echo $url === 'vorteilsangebote.php' ? '#' : $url;?>">
                <span><?php echo $item['nav'];?></span>
              </a>
              <?php if(isset($item['sub-menu'])): ?>
                <div class="sub-menu column flex-align-center justify-start">
                  <?php foreach ($item['sub-menu'] as $trigger => $subItem): ?>
                    <a
                      class="row flex-align-center <?php if(checkVar($activeTrigger) === $trigger) echo 'active'; ?>"
                      href="<?php echo $subItem['url'] ?>"
                    >
                      <span><?php echo $subItem['title']; ?></span>
                    </a>
                  <?php endforeach; ?>
                </div>
              <?php endif; ?>
            </li>
          <?php endforeach;?>
        </ul>
      </div>
    </nav>
    <div class="col row justify-start flex-align-end" style="padding: 0.9rem calc(32px + 1vw); max-width: 380px; min-width: 380px;">
      <a href="jobboerse.php" class="btn">Jobbörse</a>
    </div>
  </div>
</header>

<?php
if (!isset($noHero)):
$heroItem = isset($activeTrigger) ? $page['sub-menu'][$activeTrigger] : $page;
?>
<section class="nop big-gradient-section">
  <div class="bg-gradient-1 bg-img-contain fw fh"></div>
  <div class="fh-v fw overflow-hidden hero">
    <div class="hero__content fh row flex-align-stretch justify-space-between">
      <div class="col-md-6 col-ml-5 col-lg-4 row flex-align-center">
        <div>
          <h1 class="ca-blue">Willkommen bei <span>Clean World</span></h1>
          <p class="lead secondary-dark">
            Wir helfen Ihnen bei allen Tätigkeiten rund um Haus, Garten, Büro und Wohnen!
            Wir sind Ihr zuverlässiger Partner für Qualität und Kundenorientierung!
          </p>
        </div>
      </div>
      <div class="col-ml-7 row flex-align-end justify-center">
        <?php include 'assets/graphics/pool-cleaning.svg'; ?>
      </div>
    </div>
  </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
<script type="text/javascript">
  TweenMax.staggerTo('.tree-r', 3, {
    transformOrigin: 'center bottom',
    yoyo: true,
    rotation: -8,
    ease: Sine.easeInOut,
    repeat: -1
  }, 0.2)
  TweenMax.staggerTo('.tree-l', 3.4, {
    transformOrigin: 'center bottom',
    yoyo: true,
    rotation: 8,
    ease: Sine.easeInOut,
    repeat: -1
  }, 0.4)
  TweenMax.staggerTo('.cloud', 4, {
    transformOrigin: 'center bottom',
    yoyo: true,
    rotation: 4,
    x: -80,
    ease: Sine.easeInOut,
    repeat: -1
  }, 0.2)
</script>
<?php endif; ?>