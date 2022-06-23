"use strict";

//let ancres = document.querySelector(".ancres");
let card = document.querySelectorAll(".card");
let descriptionTextGlobal = document.querySelectorAll(
  ".description_textGlobal"
);
let icons = document.querySelectorAll(".icons");
let backgroundPage = document.querySelector(".body");
let i;

// mettre un écouteur pour voir si la page est chargé
window.addEventListener("DOMContentLoaded", () => {
  //QuerySelectorAll renvoi un tableau
  //Pour chaque élément du tableau card, ajouter un EventListener
  for (i = 0; i < card.length; i++) {
    let currentCard = card[i];
    let currentTextGlobal = descriptionTextGlobal[i];
    let currentIcon = icons[i];

    currentCard.addEventListener("click", () => {
      let backgroundImg = currentCard.style.background;

      //à chaque clique sur une photo, tout les éléments perdent les classes indiquées
      for (i = 0; i < card.length; i++) {
        card[i].classList.remove("stretch");
        descriptionTextGlobal[i].classList.remove("visible");
        icons[i].classList.remove("iconStretch");
      }
      //Ajouter la class ACTIF à la photo cliquée
      currentCard.classList.add("stretch");
      currentTextGlobal.classList.add("visible");
      currentIcon.classList.add("iconStretch");
      backgroundPage.style.background = currentCard.style.background;
      backgroundPage.style.backdropFilter = "blur(3px) brightness(30%)";
      /* ajouter un webkit pour SAFARI  ... */
    });
  }
});
