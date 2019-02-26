<?php
$headerWhite = true;
$activePage = 'services.php';

$type = $_GET['type'];
$activeTrigger = $type;

include 'data/services.php';
$ser = $services[$type];
include '_header.php';
?>

<div class="p-big nopt">
  <div class="circle-pattern-2-r bg-img-contain">

  </div>
  <div class="col-md-6">
    <h2 class="uppercase ca-blue"><?php echo $ser['catch-phrase'] ?></h2>
    <ul class="row justify-space-between">
      <?php foreach ($ser['list'] as $item): ?>
        <li class="card-list col-md-5"><?php echo $item ?></li>
      <?php endforeach; ?>
    </ul>
  </div>
</div>

</section>

<?php include '_footer.php'; ?>
