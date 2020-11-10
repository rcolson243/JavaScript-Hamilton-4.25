/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //étape 1 : mettre les caractères dans un tableau
    /*
        var elt = document.getElementById('target'); //prendre le contenu de target dans elt  <<document.querySelector("#target");>> avec le # pour qu'il sache que c'est une id
        let charsArray = [];
        var monTexte = elt.innerText || elt.textContent; //innerText et textContent pour une compatibilité des navigateurs. Mettre elt dans monTexte
        charsArray = monTexte.split(''); //séparer tous les caractères en les indexant dans un tableau nommé charsArray
    */

    const elt = document.querySelector("#target"); //prendre le contenu de l'ID target dans ELT (utilisation de # pour une ID et . pour une classe, comme en css)

    let tempo = elt.innerText.split(""); //injecter le texte de TARGET dans TEMPO , séparer tous les caractères en les indexant (création d'un ntableau)

    elt.innerText = ""; // vide le contenu de TARGET sur la page HTML en y écrivant rien.

    // étape 2 : créer la vague

    const newsize = [1.5, 2, 2.5, 3, 3.5, 4, 3.5, 3, 2.5, 2]; //définir les valeurs des prochaines tailles de caractère en vague, on donne la mesure plus loin

    tempo.forEach(function(char, i) {
        // pour chaque élément (CHARS), selon son index (I), dans la tableau TEMPO...
        const wave = document.createElement("span"); //...création d'un élément balise SPAN dans le document cible. Le tout placé dans la varibale WAVE
        wave.innerText = char; // injection de la variable CHARS, en texte, dans WAVE
        wave.style.fontSize = `${newsize[i % newsize.length]}rem`; //<< wave.style.fontSize >> définit la taille de la police des éléments dans WAVE. Et << newsize[i % newsize.length] + "rem" >> est la valeur de fontSize, donc: dans le tableau newsize, aller chercher la valeur correpondant à l'id modulo la taille du tableau. Par exemple: pour i = 4 (donc le 4ème caractère de la phrase), prendre la valeur 3.5 qui est la 4ème du tableau newsize. Pour i = 53, prendre la valeur 3 (qui se trouve à l'index 3).
        // i % newsize.length est simple ici car on a 10 éléments dans newsize. Donc, dans le tableau wave, l'index 14 sera divisé par 10 (la longeur de newsize) et donnera 1.4. le Modulo ( % ) retient la valeur restante de la division. Donc, pour 1.4, ce sera 4. Il va alors chercher la valeur indexée en 4 dans NEWSIZE et trouver 3.5.
        elt.appendChild(wave); //on place tous les WAVE en enfants de l'ID target via appenChild sur ELT. Cela donnera une suite de SPAN avec, en contenu, un caractère unique et, en valeur, style="font-size: 2rem;" DONC, par exemple: <span style="font-size: 1.5rem;">W</span>.
    });
})();
