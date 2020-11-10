/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const body = document.getElementById("target");
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let j = 0; j < 10; j++) {
        const row = document.createElement("tr");
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement("td");
            cell.innerHTML = `${i + 1}&times;${j + 1}=${(i + 1) * (j + 1)}`;
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
})();
