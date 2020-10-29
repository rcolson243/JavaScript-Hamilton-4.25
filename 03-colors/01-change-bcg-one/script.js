/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

   let btnRed = document.querySelector("#red");
   let btnGreen = document.querySelector("#green")
   let btnYellow = document.querySelector("#yellow")
   let btnBlue = document.querySelector("#blue")

   btnRed.addEventListener('click', () => btnRed.style.backgroundColor='#FF0000')
   btnGreen.addEventListener('click', () => btnGreen.style.backgroundColor='#00FF00')
   btnYellow.addEventListener('click', () => btnYellow.style.backgroundColor='#FFFF00')
   btnBlue.addEventListener('click', () => btnBlue.style.backgroundColor='#0000FF')

})();
