/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function updateDisplay(parts) {
    document.getElementById("target").innerText = `+${parts[0].innerText}${
        parts[1].innerText
    }${parts[2].innerText}${parts[3].innerText}`;
}

(function() {
    const parts = Array.from(document.querySelectorAll("button"));

    parts.forEach((elt) =>
        elt.addEventListener("click", () => {
            elt.innerText =
                elt.innerText === elt.getAttribute("data-max")
                    ? elt.getAttribute("data-min")
                    : +elt.innerText + 1;
            elt.innerText = elt.innerText.padStart(2, "0");
            updateDisplay(parts);
        }),
    );
})();
