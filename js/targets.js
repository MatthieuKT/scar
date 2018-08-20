ajaxGet("http://localhost/scar/data/targets.json", function (reponse) {

  // Stockage des données JSON dans une variable JS
  var targets = JSON.parse(reponse);

  // Récupère l'URL pour interroger le server
  var url_string = window.location.href;
  var url = new URL(url_string);
  // Récupère le paramètre de l'url concernant l'écran à cibler
  var keytofind = url.searchParams.get("c");

  // parcourt les ecrans contenus dans la requête
  // Initialisation des variables
  var i = 0, req_index = "";
  $.each(targets, function(index, value){
    // Si l'index correspond au paramètre de la page recherchée dans l'URL
    // IDEA: placer l'URL de l'image à insérer dans le mainElt
    if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
      req_index = i;
      // Récupération des noeuds
      var mainElt = document.getElementById("main");
      // TODO: Récupérer le dataDisplay pour le target.desc

      // Ensuite parcourir les index contenus dans l'écran
      value.forEach(function(target) {
        // construction de la div .action et de ses deux enfants
        var actionElt = document.createElement("div");
        actionElt.classList.add("action");

        var targetElt = document.createElement("div");
        targetElt.classList.add("target");
        var iElt1 = document.createElement('i');
        iElt1.classList.add('far');
        iElt1.classList.add('fa-circle');
        iElt1.classList.add('fa-3x');

        // Application du comportement de lien sur les targets
        var aElt = document.createElement("a");
        aElt.appendChild(iElt1)

        if (target.link) { // Le lien correspond au target.link
          aElt.href = target.link;
        } else {
          aElt.href = "#";
          // On lui attribue la classe des liens désactivés
          aElt.classList.add("lock");
        }
        targetElt.appendChild(aElt);


        var iconElt = document.createElement("div");
        iconElt.classList.add("icon");

        actionElt.appendChild(targetElt);
        actionElt.appendChild(iconElt);
        mainElt.appendChild(actionElt);


        var iElt2 = document.createElement("i");
        // Ajout des classes FontAwesome contenues dans un tableau spécial
        iElt2.classList.add(target.icon[0]);
        iElt2.classList.add(target.icon[1]);
        iElt2.classList.add(target.icon[2]);
        iElt2.style.visibility = 'hidden';

        // Ajout dynamique des coordonnées
        // IDEA: On pourrait le positionner ailleurs
        var actionStyle = actionElt.style;
        actionStyle.left = target.coordonnees.x;
        actionStyle.top = target.coordonnees.y;
        // Insertion dans la div .target
        iconElt.appendChild(iElt2);
        // Insertion finale dans mainElt
        mainElt.appendChild(actionElt);


// repérage des éléments
targetElt = document.getElementsByClassName('target');

// Zoom sur la target au survol
$(iElt1).mouseenter( function() {
  $(iElt1).removeClass("fa-circle").addClass("fa-dot-circle");
  $(iElt2).css('visibility', 'visible');
  // displayElt.innerHTML=target.name;
});
// Dézoom de la target à la sortie de souris
$(iElt1).mouseleave(function() {
  $(iElt1).removeClass("fa-dot-circle").addClass("fa-circle");
  $(iElt2).css('visibility', 'hidden');
  // displayElt.innerHTML="";
});

// Désactive les liens
$('a.lock').click(function(){
  return false;
});

}); // targets in value
}
i++;
});
}); // call ajax targets
