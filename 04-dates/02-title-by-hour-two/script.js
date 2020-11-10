/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = hours * 100 + minutes; // 1h30 -> 130 ; 22h45 -> 2245

    let greet;

    if (time < 1730) {
        greet = "Hello";
    } else {
        greet = "Good evening";
    }

    document.getElementById("element-id").innerHTML = greet;
})();
