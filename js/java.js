/* 
 Consegna: 
    1- Creato un array contenente una lista di cinque immagini tra 
    quelle fornite, creare un carosello ispirandoci alle foto in allegato.
    (non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi
    su questo, date un aspetto decente e concentriamoci sulla logica.

    MILESTONE 1
    2- Per prima cosa, creiamo il markup statico: costruiamo il container e 
    inseriamo l'immagine grande in modo da poter stilare lo slider; 
    avremo così la struttura base e gli stili pronti per poterci poi 
    concentrare solamente sull'aspetto logico.

    MILESTONE 2
    3- Adesso rimuoviamo tutto il markup statico e inseriamo le immagini 
    dinamicamente servendoci dell'array fornito e un semplice ciclo for. 
    Possiamo concatenare una stringa con un template literal oppure 
    utilizzare gli altri metodi di manipolazione del DOM che abbiamo 
    visto insieme. Al termine di questa fase ci ritroveremo con lo stesso 
    slider, ma costruito dinamicamente attraverso JavaScript.

    MILESTONE 3
    Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa 
    visibile nello slider, prendendo il posto della precedente.

 Esecuzione:
    1- Finito l'html porto tutti i miei elementi in js.
    2- Creo Array per le immagini.
    3- Tolgo il markup statico e attraverso l'array ricostruisco in js
    4- Faccio funzionare i bottoni (Tolgo e metto classi per far 
        comparire e scoprarire le immagini.)
        
*/

// porto elementi in js
const source = document.querySelector('#gallery');
const back = document.getElementById('back');
const next = document.getElementById('next');

// array
const imgList = [ "img/01.jpg", "img/02.jpg","img/03.jpg", "img/04.jpg", "img/05.jpg" ]

let imgTag= '';
// ciclo For
for (i = 0; i < imgList.length ; i++) {
    imgTag += `<img src="${imgList[i]}" alt="landscape${i+1}" class="d-none">`
}

// porto in Dom
source.innerHTML = imgTag

// creo variabile di appoggio
let img = document.querySelectorAll('#gallery img')
let current = 0;
console.log(current);

// rendo visibile la prima immagine
img[current].classList.remove('d-none');
img[current].classList.add('active');

// bottone next con ritorno
next.addEventListener('click', function() {
    // cambio immagine e aggiusto le classi
    img[current].classList.remove('active');
    img[current].classList.add('d-none');
    //porto alla prima quando sono all'ultima
    if (img[current] === img.legth) {
        current = 0;
    }
    // incremento immagine current
    current++;
    img[current].classList.remove('d-none');
    img[current].classList.add('active');
})

// bottone back con ritorno
back.addEventListener('click', function() {
    // cambio immagine e aggiusto le classi
    img[current].classList.remove('active');
    img[current].classList.add('d-none');
    // porto all'ultima quando sono all'ultima
    if (img[current] < 0) {
        img[current] = img.legth -1;
    }
    // decremento immagine current
    current--;
    img[current].classList.remove('d-none');
    img[current].classList.add('active');
})
