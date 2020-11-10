/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        const table = document.createElement("table");  //crée une table.

        for (let i = 0; i < 10; i++) {                  //crée une boucle for pour créer 10 lignes.
            const row = document.createElement("tr");         //crée le html <tr>.
            const cell = document.createElement("td");        //crée le html <td>.
            cell.innerText = i+1;                 // on affiche l'index dans la cellule
            row.appendChild(cell);                      //pousse l'enfant "data" dans le parent "row".
            table.appendChild(row);                   //pousse l'enfant "row" dans le parent "tableau".
        }

        document.getElementById("target").appendChild(table); //pousse l'enfant "tableau" dans le parent "target".

})();
