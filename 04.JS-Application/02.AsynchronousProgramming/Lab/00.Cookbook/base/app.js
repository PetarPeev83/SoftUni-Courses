
// Тъй като извикваме app.js в хедара на index.html трябва да сложим   window.addEventListener('DOMContentLoaded' , () => {})
//  за да се изпълни функцията когато сме готови с манипулациите на DOM;

window.addEventListener('DOMContentLoaded', start);    // ili   window.addEventListener('load', start);

async function start() {
    const mainElement = document.querySelector('main');

    const recipes = await getAllRecipes();
    //izchistvame sudurjanieto na main 
    mainElement.replaceChildren();
    // mapvame receptite kato gi podavame na createPreview() , i za vsiaka recepta shte suzdadem element;
    recipes.map(createPreview).forEach(elem => mainElement.appendChild(elem));
};

function createPreview(recipe) {
    const article = document.createElement('article');
    article.className = 'preview';    // vmesto "setAttribute(class , preview)";
    article.innerHTML = `<div class="title"><h2>${recipe.name}</h2></div>
    <div class="small"><img src="${recipe.img}"></div>`;

    article.addEventListener('click', () => {
        article.querySelector('h2').textContent = "Loading..."; // !!!!
        
        showDetails(recipe._id, article);
    });

    return article;
};

async function showDetails(id, preview) {
    const recipe = await getRecipeById(id);

    const article = document.createElement('article');

    article.innerHTML = `<h2>${recipe.name}</h2>
<div class="band">
    <div class="thumb">
        <img src="${recipe.img}">
    </div>
    <div class="ingredients">
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
    </div>
</div>
<div class="description">
    <h3>Preparation:</h3>
    ${recipe.steps.map(r => `<p>${r}</p>`).join('')}
</div>`;

    preview.replaceWith(article);  // podmeniame cialoto sudurjanie v DOM durvoto s   staroSadarjanie.replaceWith(novoSadarjanie);
};

async function getAllRecipes() {
    const url = ' http://localhost:3030/jsonstore/cookbook/recipes';

    const response = await fetch(url);
    const data = await response.json();

    return Object.values(data); // prevrushtame go v masiv ot obekt , za da go obrabotvame po lesno po kusno 
};

async function getRecipeById(id) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;

    const res = await fetch(url);
    const data = res.json();

    return data;
};