/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function friday13th(year) {
    let monthsArray = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "juny",
        "july",
        "augustus",
        "september",
        "october",
        "november",
        "december",
    ];

    let results = [];

    for (let month = 0; month < 12; month++) {
        let day = new Date(year, month, 13);

        if (day.getDay() === 5) {
            results.push(monthsArray[month]);
        }
    }

    return results;
}

(function() {
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;

        console.log(year);
        console.log(friday13th(year));
    });
})();
