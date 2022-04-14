// initialization
// - find relevant section
// - detach section from DOM
// display logic

import { e, showView } from "./dom.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { updateNav } from "./app.js";


let moviesCache = null;  //ako iskame da keshirame za izvestno vreme
let lastLoad = null;    // za da ne se prezarejda stranicata prez tova vreme ami da pokazva poslednoto zaredeno
const maxTime = 500;  // tova sa milisecundi (5sec.) , minuta e 60000;
// keshirano getMoves()

const section = document.getElementById('home-page');

document.querySelector('#createLink').addEventListener('click', (event) => {
    event.preventDefault(); //------------------------- ZADULJITELNO !!!
    showCreate();
});

section.remove();

const catalog = section.querySelector('.card-deck.d-flex.justify-content-center'); //intervalite zamestvame s tochki za da raboti querrySelectora

catalog.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    if (target.tagName == "BUTTON") {
        target = target.parentElement;
    };
    if (target.tagName == "A") {
        const id = target.dataset.id;
        showDetails(id);
    };
});

export function showHome() {

    showView(section);
    getMovies();    // vzimame filmite ot survara
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        document.querySelector('main #add-movie-button').style.display = 'block';
    } else {
        document.querySelector('main #add-movie-button').style.display = 'none';
    }

};

async function getMovies() {
    catalog.replaceChildren(e("h2", {}, "Loading..."));

    const now = Date.now();

    if (moviesCache == null || (now - lastLoad) > maxTime) {

        lastLoad = now;

        const res = await fetch('http://localhost:3030/data/movies');

        if (res.status == 403) {
            sessionStorage.removeItem('userData');
            updateNav();
            showHome();
        }

        const data = await res.json();
        moviesCache = data;
    };

    catalog.replaceChildren(...moviesCache.map(createMovieCard));

    // return data;
};
// window.getMovies = getMovies; // zakachame kum window za da moje da go testvame dali raboti

function createMovieCard(movie) {
    const element = e('div', { className: "card mb-4" }); // !! suzdavame div-a s class="card mb-4";  !!
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
alt="Card image cap" width="400">
<div class="card-body">
<h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
<a data-id=${movie._id} href="#">
<button type="button" class="btn btn-info">Details</button>
</a>
</div>`

    return element;
};
