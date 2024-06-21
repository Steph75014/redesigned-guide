'use strict';

// Vérifie si le bouton a déjà été cliqué
document.addEventListener('DOMContentLoaded', function() {
    let bouton = document.getElementById('boutonUnique');
    if (sessionStorage.getItem('boutonClique')) {
        bouton.classList.add('desactive');
        bouton.disabled = true;
        bouton.textContent = "Déjà cliqué";
    }

    bouton.addEventListener('click', function() {
        this.classList.add('desactive'); // Ajoute une classe pour le styliser comme désactivé
        this.disabled = true; // Désactive le bouton pour empêcher d'autres clics
        sessionStorage.setItem('boutonClique', 'true'); // Enregistre l'état du bouton comme étant cliqué
        this.textContent = "Cliqué"; // Change le texte du bouton
        window.location.href = 'img/CATALOGUE DPROJECT KS 2O24 STEVOO.pdf'; // Navigue vers la destination spécifiée
    });
});
