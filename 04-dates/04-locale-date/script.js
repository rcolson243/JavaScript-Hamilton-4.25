/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let daysArray = new Array(
        "Monday",
        "Thuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    );
    let monthsArray = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "juny",
        "july",
        "augustus",
        "september",
        "october",
        "november",
        "december",
    ];

    let date = new Date();

    let day = date.getDay() - 1;
    console.log(daysArray[day]);
    let daydate = date.getDate();
    console.log(daydate);
    let month = date.getMonth();
    console.log(monthsArray[month]);

    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    document.getElementById("target").innerHTML = `${
        daysArray[day]
    } ${daydate} ${monthsArray[month]} ${year} ${hour}h${minute}`;
})();
