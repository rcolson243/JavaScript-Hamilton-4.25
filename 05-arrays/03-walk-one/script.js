/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        for (let product of fruits) {
            //produit peut s'appeler de façon différente, par ex value

            console.log(product); //renvoie le nom de la valeur en cours à chaque boucle quand on actionne le bouton
        }
    });
})();
