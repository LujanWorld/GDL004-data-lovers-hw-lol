import lolData from './data/lol/lol.js'

import {
    order,
    sort,
    magic
} from './data.js';



var champions = [];
//recorre cada uno de los nombres de personajes con sus propiedades
for (const name of Object.keys(lolData.data)) { 
    const champ = lolData.data[name];
    champions.push(champ);
}
console.log(champions);

const cards = document.getElementById('cards');

function showCards(data) {
    // Delete cards. why??
    cards.innerHTML = "";

    data.forEach(champ => {
        //crea un elemento en el html
        const card = document.createElement('article');// porque no hat apenndchild?
        //le agrega la clase al elemento creado para poder manipularlo en el css
        card.classList.add('card');
        // crea la img que esta en el html,aqui  en js
        const img = document.createElement('img');
        //le agrega lo que tiene la img el src y el alt
        img.src = champ.img;
        img.alt = champ.name;
        // agrega la img a la card
        card.appendChild(img);
        //esta linea crea el elemento para agregar el nombre de cada champion 
        const name = document.createElement('p');
        //se agrega esta linea para poder dar stylo al nombre
        name.classList.add('name');
        //se lo adjunta a la card
        card.appendChild(name);
        // agrega el nonbre para que se vea en la card?
        name.innerHTML = champ.name;
        const attack = document.createElement('p');
        //se agrega esta linea para poder dar stylo al nombre
        attack.classList.add('attack');
        //se lo adjunta a la card
        card.appendChild(attack);
        // agrega el nonbre para que se vea en la card?
        attack.innerHTML = champ.info.attack + " "+ "Attack";
        //agrega texto del html aqui en js
        const text = document.createElement('div');
        //le agrega la clase del div text
        text.classList.add('text');
        // agrega el texto para que se vea en el html?
        text.innerHTML = champ.blurb;
        //agrega el texto a la card 
        card.appendChild(text)


        //muestra la lista de card completa al final
        cards.appendChild(card);
    });

}

showCards(champions);

const botonOrdenar = document.getElementById('order');
botonOrdenar.addEventListener('click', () => {

    
     showCards(magic(champions));

});
const botonFilter = document.getElementById('filter');
botonFilter.addEventListener('click', () => {

    
     showCards(sort(champions));

});

const botonSort = document.getElementById('sort');
botonSort.addEventListener('click', () => {
    
    showCards(order(champions));

});