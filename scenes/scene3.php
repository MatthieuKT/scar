<?php
// Include header
include_once 'layout_header.php';
?>

  <div id="main" class="col-md-12">
    <div id="mainFilter"></div>
    <img id="bckgrndImg" src="../images/task.jpg" class="img-fluid" alt="Responsive image" style="height:50em;">
    <!-- Div contenant les choix -->
    <div id="choicesDisplay"></div>
    <!-- Div affichant le dialogue -->
    <div id="dataDisplay">
       <span id="data"></span>
       <button id="next">suiv.</button>
       <button id="next2">suiv.</button>
    </div>
  </div>

  <!-- Sons d'ambiance -->
  <audio id="ambiance" controls autoplay>
   <source src="../sons/ambiance2.ogg" type="audio/ogg">
   <source src="../sons/ambiance2.mp3" type="audio/mpeg">
   Your browser does not support the audio tag.
  </audio>

<?php
// Include footer
include_once 'layout_footer.php';
?>
