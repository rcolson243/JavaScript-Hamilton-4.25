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

    // your code here

    /*let c = document.getElementById('target');
    let h = new Date();
    let g = h.getHours() +':'+ h.getMinutes();
    if (g<'17:30')
            c.innerHTML = "Hello";
    else{

        c.innerHTML = "good evening";
    } */
    function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var age = new Date(diff); 
        return Math.abs(age.getUTCFullYear() - 1970);
        
    }

    function getAge(d1, d2){
        d2 = d2 || new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    console.log( getAge(new Date(1978, 10, 3)) );
    




})();
