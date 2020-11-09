/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let terme1 = +document.getElementById("op-one").value;
        let terme2 = +document.getElementById("op-two").value;

        switch(operation){
            case "addition":
            document.getElementById("addition").textContent = "The result is : " + (terme1 + terme2);    
            break;
            case "substraction":
            document.getElementById("substraction").textContent = "LThe result is  : " + (terme1 - terme2);

            break;
            case "multiplication":
            document.getElementById("multiplication").textContent = "The result is  : " + (terme1 * terme2);

            break;
            case "division":
            document.getElementById("division").textContent = "The result is  : " + (terme1 / terme2);
            break;
            default:
            break;
            }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

