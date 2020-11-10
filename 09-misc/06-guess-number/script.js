/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const number = Math.ceil(Math.random() * 100);
    let guesses = 0;
    let guess = prompt("Yo bro, what's the number ?");

    while (number !== guess) {
        guesses++;
        guess = prompt(
            number > guess ? "Go higher Bro!" : "You're too high Bro!",
        );
    }

    alert(`In ${++guesses} guesses ? You're a champ, Bro !`);
})();
