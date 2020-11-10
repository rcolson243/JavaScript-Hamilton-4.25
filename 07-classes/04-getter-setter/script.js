/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `${this.firstname} ${this.lastname}`;
        }

        set name(text) {
            const arr_nam = text.split(" ");

            this.firstname = arr_nam[0];
            this.lastname = arr_nam[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        const johnny = new Person("Johnny","Hallyday");
        console.log(johnny);
        console.log(johnny.name);

        johnny.name = "Jean-Phillipe Smet";
        console.log(johnny);
        console.log(johnny.name);
    });
})();
