/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const camelia = {
        lastname: "Jarek",
        firstname: "Camélia",
        age: "25",
        city: "Liège",
        country: "Belgium",
    };

    document.getElementById("run").addEventListener("click", function() {
        console.log(camelia);
    });
})();
