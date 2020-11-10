/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.getElementById("target");
    // recup la phrase & divise le texte pour séparé chaque lettre et crée un tableau
    const text = target.innerText.split("");

    // replace le contenu de target par du "vide"
    target.innerText = "";

    const addcharacter = i => {
        target.innerHTML += text[i];

        if (i < text.length) {
            setTimeout(() => {
                addcharacter(i+1);
            }, Math.floor(Math.random() * 400 - 200) + 200);
        }
    };

    addcharacter(0);
})();
