var choicesDisplay = document.getElementById('choicesDisplay');
var dialogElt = document.getElementById('data');
var nextElt = document.getElementById('next');
var nextElt2 = document.getElementById('next2');
// permet de situer l'index du texte
var iteration = 0;

ajaxGet("http://localhost/scar/data/acte1.json", function (reponse) {
  var dialog = JSON.parse(reponse);

  // Récupère l'URL pour interroger le server
  // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var url_string = window.location.href;
  var url = new URL(url_string);
  // Récupère le paramètre de l'url concernant un écran en particulier
  var keytofind = url.searchParams.get("c");


  // Initialisation des variables
  var i = 0, req_index = "";
  var testObj = Object.create(Dialog);
  // parcourt les ecrans contenus dans la requête
  $.each(dialog, function(index, value){
    // Si l'index correspond au paramètre de la page recherchée dans l'URL
    // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt

    if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
      req_index = i;

      // Initialisation du premier texte à l'ouverture de la page
      if (iteration === 0) {
        testObj.initDialog(value);
        dialogElt.textContent = value[0].texte;
      }


nextElt.addEventListener('click', function() {

  // Si l'on a atteint la fin du dialogue
  if (iteration === value.length-1) {
    console.log("the end");
    testObj.dialogEnd();
  }

  // Si c'est une réplique normale
  else if (value[iteration].type === "replique"){
    iteration = iteration+1;
    dialogElt.textContent = value[iteration].texte;

  }

  else if (value[iteration].type === "choix") {
    nextElt.style.display = 'none';
    dialogElt.textContent = value[iteration].texte;
    testObj.getChoices();

    var a = 0;
    $('.choixElt').on('click', function(e) {
      e.stopPropagation();
      var data = $(this).attr('data');
      if (data === "choix1") {
        nextElt2.style.visibility = "visible";
        choicesDisplay.style.display = 'none';
        // initialise le compteur de repliques contenu dans le choix en question
        dialogElt.textContent = value[iteration].choix1[a][1];
        a = a+1;

        $('#next2').on('click', function() {
          if (a < value[iteration].choix1.length) {
            dialogElt.textContent = value[iteration].choix1[a][1];
            a = a+1;
          }
          else if (a === value[iteration].choix1.length) {
            nextElt2.style.visibility = "hidden";
            // On passe au noeud suivant
            nextElt.style.display = '';
            iteration = iteration+1;
            dialogElt.textContent = value[iteration].texte;
          }
        });
      }// choix1

      else if (data === "choix2") {
        nextElt2.style.visibility = "visible";
        choicesDisplay.style.display = 'none';
        // initialise le compteur de repliques contenu dans le choix en question
        dialogElt.textContent = value[iteration].choix2[a][1];
        a = a+1;

        $('#next2').on('click', function() {
          if (a < value[iteration].choix2.length) {
            dialogElt.textContent = value[iteration].choix2[a][1];
            a = a+1;
          }
          else if (a === value[iteration].choix2.length) {
            nextElt2.style.visibility = "hidden";
            // On passe au noeud suivant
            nextElt.style.display = '';
            iteration = iteration+1;
            dialogElt.textContent = value[iteration].texte;
          }
        });
      }// choix2

      else if (data === "choix3") {
        nextElt2.style.visibility = "visible";
        choicesDisplay.style.display = 'none';
        // initialise le compteur de repliques contenu dans le choix en question
        dialogElt.textContent = value[iteration].choix3[a][1];
        a = a+1;

        $('#next2').on('click', function() {
          if (a < value[iteration].choix3.length) {
            dialogElt.textContent = value[iteration].choix3[a][1];
            a = a+1;
          }
          else if (a === value[iteration].choix3.length) {
            nextElt2.style.visibility = "hidden";
            // On passe au noeud suivant
            nextElt.style.display = '';
            iteration = iteration+1;
            dialogElt.textContent = value[iteration].texte;
          }
        });
      }// choix3
    }); //choixElt click
  }// if value.type === "choix"
}); // Au click du bouton next



} // if index = keytofind
else { // Alors cette page ne contient aucun dialogue
  $(dataDisplay).css('display', 'none');
  $(".action").css('visibility', 'visible');
}
// i++; // Itère tant que l'index n'est pas égal à keytofind
}); // $.each
}); // AJAX call
