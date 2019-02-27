<?php
$headerWhite = true;
$activePage = 'services.php';

$type = $_GET['type'];
$activeTrigger = $type;

include 'data/_services.php';
$ser = $services[$type];
include '_header.php';
?>

<div class="p-big row justify-center">
  <div class="circle-pattern-2 end-circle-lg bg-img-contain">
  </div>
  <div class="col-ml-10 col-lg-6 card">
    <div class="col">
      <div class="uppercase ca-blue"><?php echo $ser['catch-phrase'] ?></div>
      <h3>Zu unseren Aufgabengebieten gehören:</h3>
    </div>
    <ul class="row justify-space-between">
      <?php foreach ($ser['list'] as $item): ?>
        <li class="col-md-6 row nowrap">
          <i class="fa fa-check-circle ca-magenta" style="margin-top: 2px;"></i>
          <span style="margin-left: 8px;"><?php echo $item ?></span>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>

</section>

<?php include '_footer.php'; ?>
