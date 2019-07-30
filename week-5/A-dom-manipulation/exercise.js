/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.

* Escriba JavaScript debajo que cambie el color de fondo de la página cuando se haga clic en el botón "Change colour".

*/

let ChangeColourBtn = document.querySelector('#bgrChangeBtn');


ChangeColourBtn.addEventListener('click', function() {
    let ChangeColourBodyBtn = '#00bfff';
    document.body.style.backgroundColor = ChangeColourBodyBtn;
    // ChangeColourBtn.style.backgroundColor = 'red' -> Funciona solo para el fondo del botón
})

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertBtnText = document.querySelector('#alertBtn');

alertBtnText.addEventListener('click', function() {
    alert('Thanks for visiting Bikes for Refugees!')
})


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."

* Cuando un usuario hace clic en el botón 'Add some text', debe agregarse un nuevo párrafo debajo de los botones que dicen "Lea más abajo".

*/

let addTextBtn = document.querySelector('#addTextBtn');

let box = document.querySelector('.jumbotron');

let addTextBtnTagP = document.createElement('p');

addTextBtn.addEventListener('click', function() {
    box.appendChild(addTextBtnTagP);
    addTextBtnTagP.innerHTML = 'Read more below.';

})

// function addTextJumbotron() {
//     let box = document.querySelector('.jumbotron');
//     let addTextBtnTagP = document.createElement('p');
//     addTextBtnTagP.innerHTML = '';
//     addTextBtnTagP.innerHTML = 'Read more below.';
//     box.appendChild(addTextBtnTagP);
// }



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.

* Cuando los 'Larger links!' al hacer clic en el botón, el texto de todos los enlaces en la página debería aumentar.

*/

let largerLinksBtn = document.querySelector('#largerLinksBtn')

let LargerLinks = document.querySelectorAll('.article-title--sidebar');

largerLinksBtn.addEventListener('click', () => {
    LargerLinks.forEach(tagA => tagA.style.fontSize = '2em')
});


// let largeBtn = document.querySelector('#largerLinksBtn')
// largeBtn.addEventListener('click', biggerLinks)

// function biggerLinks() {
//     let linksTagA = document.querySelectorAll('.article-title--sidebar')
//     let i;
//     for (i = 0; i < linksTagA.length; i++) {
//         linksTagA[i].style.fontSize = '2em'
//     }
// }