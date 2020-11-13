/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts()
            .then(data => {
                data.forEach(element => {
                    window.lib.getComments(element.id).then(data => {
                        element.comments = data;
                        console.log(element)
                    })
                });
            })
    })
})();
