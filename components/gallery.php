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
    'img' => 'winter.jpg',
  ],
  [
    'category' => 'Winterdienst',
    'img' => 'winter2.jpg',
  ],
]

?>

<section class="gallery__container ">
  <div class="gallery__filters">
    <div class="btn" data-group="Hausdienst">Hausdienst</div>
    <div class="btn" data-group="Bodenreinigung">Bodenreinigung</div>
    <div class="btn" data-group="Gartendienst">Gartendienst</div>
    <div class="btn" data-group="Winterdienst">Winterdienst</div>
    <div class="btn" data-group="Alround Service">Alround Service</div>
    <div class="btn" data-group="Glasreinigung">Glasreinigung</div>
  </div>
  <div class="gallery">
    <?php
    $counter =1;
    foreach ($gallery as $key => $item):
      $theIF = $counter % 3 == 0;
    ?>
      <figure
        class="gallery__item col-md-5 <?php echo $theIF ? 'col-lg-6' : 'col-lg-3'; ?>"
        data-group='["<?php echo $item['category']; ?>"]'
      >
        <div
          class="img bg-img"
          style="background-image: url(assets/gallery/<?php echo $theIF ? 'big/' : 'thumb/'; echo $item['img']; ?>)"
        >
          <div class="gallery__content ca-all">
            <h5><?php echo $item['category'] ?></h5>
            <div class="icons row nowrap justify-center">
              <a href="#">
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
