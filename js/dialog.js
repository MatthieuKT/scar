var choicesDisplay = document.getElementById('choicesDisplay');
var dialogElt = document.getElementById('data');
var nextElt = document.getElementById('next');
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
      // Initialise la boite de dialogue
      if (iteration === 0) {
        testObj.initDialog(value);
        testObj.getReplica();
        iteration = iteration+1;
      }

      // Au clic du boutno suivant
      nextElt.addEventListener('click', function() {
        // Tant que l'o a pas atteint la fin du dialogue
        if (value.length !== iteration ) {
          // Si c'est une réplique normale
          if (value[iteration].type === "replique"){
              testObj.getReplica();
              iteration = iteration+1;
            }
            // Si c'est un type choix
            else if (value[iteration].type === "choix") {
              // On affiche les différents choix
              testObj.getChoices();
              // disparition du bouton next lors du choix
              nextElt.style.display = 'none';
              // Lors du choix du dialogue
              $('.choixElt').on('click', function() {
                var data = $(this).attr('data')
                if (data === "choix1") {
                  testObj.choix1Display();
                  // 3: A la fin de tout ça, on reviens au dialogue normal
                  nextElt.addEventListener('click', function() {
                    iteration = iteration+1;
                    testObj.getReplica();
                    // Réapparition de nextElt
                    nextElt.style.display = "";
                  });
                } else if (data === "choix2") {
                  testObj.choix2Display();
                  // 3: A la fin de tout ça, on reviens au dialogue normal
                  nextElt.addEventListener('click', function() {
                    iteration = iteration+1;
                    testObj.getReplica();
                    // Réapparition de nextElt
                    nextElt.style.display = "";
                  });
                } else if (data === "choix3") {
                  testObj.choix3Display();
                  // 3: A la fin de tout ça, on reviens au dialogue normal
                  nextElt.addEventListener('click', function() {
                    iteration = iteration+1;
                    testObj.getReplica();
                    // Réapparition de nextElt
                    nextElt.style.display = "";
                  });

                  // TODO: Itérer ici et getReplica?

                }
              }); // choixElt onclick
          } // if value.type === "choix"
        }
        // Si l'on a atteint la fin du dialogue
        else if (value.length === iteration ) {
          testObj.dialogEnd();
        }

      });





    //    if (u == value.length){ // IDEA: stopper la touche entrée?
    //      // On vide la boite de dialogue
    //      dialogElt.innerHTML = "";
    //      // disparition de la boite de dialogue
    //      $('#dataDisplay').fadeOut();
    //      // Apparition des targets
    //      $(".action").css('visibility', 'visible');
    //    }
    // }

    }; // if index = keytofind
    // i++; // Itère tant que l'index n'est pas égal à keytofind
 }); // $.each
}); // AJAX call
