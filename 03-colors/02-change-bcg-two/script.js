/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
   // const colors = ["red", "#FF0000", "green", "#00FF00", "yellow", "#FFFF00" , "blue", "#0000FF"];
    const btn = document.getElementById('run');
    const color = document.querySelector('#color');

    btn.addEventListener('click', () => {

        document.body.style.background= color.value;
     })
    
})();
