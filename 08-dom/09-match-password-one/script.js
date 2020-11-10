/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        const passwordOne = document.getElementById("pass-one").value;
        const passwordTwo = document.getElementById("pass-two").value;
        document
            .querySelectorAll("input")
            .forEach(
                elt =>
                    (elt.style.borderColor =
                        passwordOne !== passwordTwo ? "red" : "silver"),
            );
    });
})();
