<?php include 'data/services.php'; ?>

<section class="p-big">
  <div class="circle-pattern-2 bg-img-contain"></div>
  <div class="container">
    <div class="col-md-6">
      <h2 class="uppercase ca-blue">Unsere Services</h2>
      <p class="lead secondary-dark">
        Wir reinigen für Sie mit langjähriger Erfahrung die unterschiedlichsten Bereiche, egal ob im geschäftlichen, öffentlichen oder privaten Umfeld
      </p>
    </div>
  </div>
  <div class="container row flex-align-stretch">
    <?php foreach ($services as $key => $service): ?>
      <div class="col-lg-4 col-md-6 row flex-align-stretch">
        <div class="services-small column justify-space-between flex-align-center">
          <div class="icon row justify-center flex-align-center">
            <i class="fa fa-<?php echo $service['icon']; ?>"></i>
          </div>
          <h3><?php echo $service['title']; ?></h3>
          <p><?php echo cutString($service['text']); ?></p>
          <a href="service-single.php?type=<?php echo $key; ?>" class="btn">Read More</a>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>
