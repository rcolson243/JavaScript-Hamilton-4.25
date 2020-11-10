/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.getElementById('target');

    target.innerText = localStorage.getItem('value') || 0;

    // on increment button click, add 1
    document.getElementById('increment').addEventListener( 'click', () => {
        ++target.innerText;
        localStorage.setItem('value', target.innerText);
    })

})();
