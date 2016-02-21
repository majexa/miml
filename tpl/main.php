<!DOCTYPE html>
<html>
<head>
  <title><?= $d['pageHeadTitle'] ?></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="icon" href="data:;base64,=">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no">
  {sflm}
</head>
<body>

<script>
if (!Ngn) var Ngn = {};
Ngn.toggle = function(el) {
  el.style.display = (el.style.display == 'block' || el.style.display == '') ? 'none' : 'block';
  if (el.style.display == 'none') {
    document.getElementById('hBackBtn').style.display = 'none';
  } else {
    document.getElementById('hBackBtn').style.display = 'block';
  }
  return false;
};
</script>

<a href="#" class="hBackBtn hBackBtnMenu" id="hBackBtn" onclick="return Ngn.toggle(document.getElementById('menu'))"></a>
<div class="header">
  <a href="#" class="hMenuBtn" onclick="return Ngn.toggle(document.getElementById('menu'))"></a>
  <div class="title">
      <?= $d['pageTitle'] ?>
  </div>
</div>
<div class="menu" id="menu">
  <? $this->tpl('cp/links', $d['menu']) ?>
</div>
<script>Ngn.toggle(document.getElementById('menu'))</script>
<div class="body" id="body">
  <?= $d['body'] ?>
  <!--<p class="subscript">subscript</p>-->
</div>
</body>
</html>
