<script type="text/javascript" src="js/dist/gallery.js"></script>
<script src="js/dist/vendors~gallery.js" type="text/javascript"></script>

<?php
$gallery = [
  [
    'category' => 'Hausdienst',
    'img' => 'room.jpg',
  ],
  [
    'category' => 'Hausdienst',
    'img' => 'room2.jpg',
  ],
  [
    'category' => 'Gartendienst',
    'img' => 'garden.jpg',
  ],
  [
    'category' => 'Gartendienst',
    'img' => 'garden2.jpg',
  ],
  [
    'category' => 'Gartendienst',
    'img' => 'garden3.jpg',
  ],
  [
    'category' => 'Glasreinigung',
    'img' => 'window.jpg',
  ],
  [
    'category' => 'Glasreinigung',
    'img' => 'window2.jpg',
  ],
  [
    'category' => 'Glasreinigung',
    'img' => 'window3.jpg',
  ],
  [
    'category' => 'Bodenreinigung',
    'img' => 'floor.jpg',
  ],
  [
    'category' => 'Bodenreinigung',
    'img' => 'floor2.jpg',
  ],
  [
    'category' => 'Winterdienst',
    'img' => 'winter2.jpg',
  ],
]

?>

<section class="gallery__container ">
  <div class="container-big row justify-center flex-align-center">
    <?php include 'assets/gallerie.svg'; ?>
  </div>

  <div class="gallery__filters row justify-center">
    <div class="btn-border" data-group="hausdienst">Hausdienst</div>
    <div class="btn-border" data-group="bodenreinigung">Bodenreinigung</div>
    <div class="btn-border" data-group="gartendienst">Gartendienst</div>
    <div class="btn-border" data-group="winterdienst">Winterdienst</div>
    <div class="btn-border" data-group="alround service">Alround Service</div>
    <div class="btn-border" data-group="glasreinigung">Glasreinigung</div>
  </div>
  <div class="gallery">
    <?php
    $counter =1;
    foreach ($gallery as $key => $item):
      $theIF = $counter % 3 == 0 && $counter !== 12;
    ?>
      <figure
        class="gallery__item col-ms-6 col-md-4 <?php echo $theIF ? 'col-lg-6' : 'col-lg-3'; ?>"
        data-groups='["<?php echo strtolower($item['category']); ?>"]'
      >
          <div
            class="img bg-img"
            style="background-image: url(assets/gallery/<?php echo $theIF ? 'big/' : 'thumb/'; echo $item['img']; ?>)"
          >
            <div class="gallery__content ca-all">
              <h5><?php echo $item['category'] ?></h5>
              <div class="icons row nowrap justify-center">
                <a class="open-lightbox" href="assets/gallery/big/<?php echo $item['img']; ?>">
                  <i class="fa fa-search-plus"></i>
                </a>
                <a href="#">
                  <i class="fa fa-link"></i>
                </a>
              </div>
            </div>
          </div>
      </figure>
    <?php
    $counter++;
    endforeach; ?>
    <!-- <div class="gallery__sizer col-md-5 col-lg-4 col-el-3"></div> -->
  </div>
</section>
