/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //add a click listener to the run button
    document.getElementById("run").addEventListener("click", function() {
        let numbers = [];
        let sum = 0;

        //loop to push random 10 numbers in the array numbers
        for (let i = 0; i < 10; i++) {
            numbers.push(Math.floor(Math.random() * 100) + 1);
        }

        //for every element of the numbers array -> modify innerHTML of correspongin ID
        numbers.forEach((element, index) => {
            document.getElementById(`n-${index+1}`).innerHTML = element;

            //Sum of the numbers
            sum += element;
        });

        //Get max and min values of the array numbers
        const max = Math.max(...numbers); // Math.max( numbers[0], numbers[1], numbers[2] )
        const min = Math.min(...numbers);

        //Calculate average of all the numbers in the array numbers
        const average = sum / numbers.length;

        //Put the values in the HTML
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    });
})();
