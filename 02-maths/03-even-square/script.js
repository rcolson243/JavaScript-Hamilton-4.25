/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        let number = 2, results = [];

        while (number <= 21) {
            results.push(number ** 2); // Math.pow(number, 2)
            number += 2;
        }

        alert(results);
    });
})();
