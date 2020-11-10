/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function collectDatas() {
    let age = prompt("Enter your age");
    let gender = prompt("Enter your gender");
    let address = prompt("Enter your locality");
    let allRight = confirm( `You are ${age} years old ${gender} and you live in ${address}`);

    if (allRight) {
        alert("Thanks for your participation");
    } else {
        collectDatas();
    }
})();
