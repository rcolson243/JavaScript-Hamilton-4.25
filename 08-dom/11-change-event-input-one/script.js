(function() {
    const input = document.getElementById("pass-one");
    const counter = document.getElementById("counter");

    input.setAttribute("maxLength", 10); /*max 10 sur l'élément elements*/

    document.getElementById("pass-one").addEventListener("input", () => {
        counter.innerText = `${input.value.length}/10`;
    });
})();
