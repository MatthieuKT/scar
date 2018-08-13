var Dialog = {
  // Initialise le dialogue
  initDialog: function(dialog) {
    this.dialog = dialog;
    this.dialogLength = dialog.length;
  },

  getReplica: function() {
    dialogElt.textContent = this.dialog[iteration].texte;
  },

  getChoices: function() {
    dialogElt.textContent = this.dialog[iteration].texte;
    var listeChoix = this.dialog[iteration].choix;
    for (var cle in listeChoix) {
      for (var cle2 in listeChoix[cle]) {
        var choixElt = document.createElement('button');
        choixElt.classList.add('choixElt');
        // On lui donne un attribut data contenant la référence du choix
        choixElt.setAttribute('data', cle2);
        choixElt.textContent = listeChoix[cle][cle2];
        choicesDisplay.appendChild(choixElt);
        choicesDisplay.innerHTML += "<br>"
      }
    }
  },

  choix1Display: function() {
    // 1: disparition de choixdisplay
    choicesDisplay.style.display = 'none';
    // 2 : Apparition du texte et du bouton next
    this.dialog[iteration].choix1.forEach(function(z){
      dialogElt.textContent = z.texte;
    })
    nextElt.style.display = "";
  },

  choix2Display: function() {
    // 1: disparition de choixdisplay
    choicesDisplay.style.display = 'none';
    // 2 : Apparition du texte et du bouton next
    this.dialog[iteration].choix2.forEach(function(z){
      dialogElt.textContent = z.texte;
    })
    nextElt.style.display = "";
  },

  choix3Display: function() {
    // 1: disparition de choixdisplay
    choicesDisplay.style.display = 'none';
    // 2 : Apparition du texte et du bouton next
    this.dialog[iteration].choix3.forEach(function(z){
      dialogElt.textContent = z.texte;
    })
    nextElt.style.display = "";
  },

  dialogEnd: function() {
      // Ce qui signifie la fin du dialogue
      // 1: On vide la boite de dialogue
      dialogElt.innerHTML = "";
      // 2: On rajoute le fadeOut sur dialogElt
      nextElt.style.display = "none";
      $("#dataDisplay").fadeOut(500);
      // 3: On fait apparaître les .action
      $(".action").css('visibility', 'visible');
  }
}
