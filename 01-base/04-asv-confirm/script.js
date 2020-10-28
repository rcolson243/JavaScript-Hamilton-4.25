/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let a = true;
    
    do {
        let age = prompt("quel est votre âge ?");
        let sexe = prompt("quel est votre sexe ?");
        let ville = prompt("vous venez de quel ville ?");
        if  (confirm(`ssac ${age} ${sexe} ${ville} `)) {
            a = false;
        } else {
            a = true;
        }
    } while (a); 
   
})();
