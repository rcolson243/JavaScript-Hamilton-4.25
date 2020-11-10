/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    for (
        let n = 1;
        n <= 100;
        n++ // pour une valeur numérique n plus petite ou égale à 100 (en commençant par 1),...
    ) {
        let message = "";

        if (n % 3 === 0) {
            message += "fizz";
        }

        if (n % 5 === 0) {
            message += "buzz";
        }

        console.log(message || n);
    }
})();
