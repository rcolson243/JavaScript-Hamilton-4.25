/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const img = document.querySelector("img");

    const base = img.getAttribute("src"); //prend l'élement IMG 0 avec l'attribut src
    const hovered = img.getAttribute("data-hover"); //prend l'élement IMG 0 avec le nom data-hover

    img.addEventListener("mouseover", () => {
        //ajoute un évenement mouseover, quand on passe la souris l'image date-hover (coeur) apparait
        img.src = hovered;
    });
    img.addEventListener("mouseout", () => {
        //ajoute un évenement mouseout, quand la souris quitte l'image l'image nocoeur revient
        //si cette action n'est pas ajoutée l'image data-hover/coeur reste
        img.src = base;
    });
})();
