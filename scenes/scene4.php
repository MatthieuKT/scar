<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: Arial;
    font-size: 17px;
}
#Video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
</style>
</head>
<body>

<video autoplay muted id="video">
  <source src="../videos/timelapse.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

<script type="text/javascript">
  var video = document.getElementById('video');
  // Redirection vers la scene suivante à la fin de la vidéo
  video.onended = function() {
    document.location = 'intro.php';
};
</script>
</body>
</html>
