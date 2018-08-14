<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/intro.css">
    <link rel="stylesheet" href="../css/custom.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>SCAR - intro</title>
  </head>
  <body>

    <div id="main" class="col-md-12">
      <img id="bckgrndImg" src="../images/intro.jpg" class="img-fluid" alt="Responsive image" style="height:50em;">
      <!-- Div contenant l'intro -->
      <div id="intro" class="col-md-6 offset-md-3">
        <span id="narrative"></span>
      </div>
    </div>

    <audio id="ambiance" controls autoplay>
     <source src="../sons/intro.ogg" type="audio/ogg">
     <source src="../sons/intro.mp3" type="audio/mpeg">
     Your browser does not support the audio tag.
    </audio>

    <!-- JQuery -->
    <script src="../js/jquery.js"></script>
    <!-- AJAX -->
    <script type="text/javascript" src="../js/ajax.js"></script>
    <!-- Narration -->
    <script type="text/javascript" src="../js/intro.js"></script>

  </body>
  </html>
