/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener( 'click', () => {
        let now = new Date();
        let inputDate = new Date(`
            ${document.getElementById('dob-month').value},
            ${document.getElementById('dob-day').value},
            ${document.getElementById('dob-year').value}
        `);
        let age = Math.floor((now - inputDate) / 365 / 24 / 3600 / 1000) ;
        alert(`You have ${age} years old.`);
    })

})();
