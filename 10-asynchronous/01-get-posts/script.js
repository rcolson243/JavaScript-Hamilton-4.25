/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
document.getElementById("run").addEventListener("click", () => {

    // your code here

    window.lib.getPosts((error, articles) => {
            (error) ? console.error(error) : console.table(articles);
        }
    );
  });





/*document.getElementById("run").addEventListener("click", () => {

    //quand on clique sur le bouton, la fonction getPosts est lancée
    window.lib.getPosts(



        //la fonction ci-dessous est la fonction callback en paramètre de getPosts()
        (error, articles) => {
            if(error) {
                // il y a une erreur : error vaut qq chose (donc considéré comme true par le if)
                console.error(error);
            } else {
                //  il n'y a pas d'erreur : error vaut null (considéré comme false, on fait le else) : on peut lancer le code souhaité
                console.log(articles);
            }
        }

    );

});*/
