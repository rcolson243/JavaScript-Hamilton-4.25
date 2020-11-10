/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const valide = document.getElementById("validity");
    const myInput = document.getElementById("pass-one");

    myInput.addEventListener("keyup", () => {
        const onlyDigits = myInput.value.replace(/[^0-9 ]/g, "");
        const check2num = onlyDigits.length >= 2;
        const checklong = myInput.value.length >= 8;

        valide.innerHTML = checklong && check2num ? "OK" : "Not ok";
    });
})();
