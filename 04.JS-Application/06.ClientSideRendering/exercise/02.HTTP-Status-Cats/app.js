import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

/*
const template = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${changeStatus}>Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>`;

const allCatsSection = document.getElementById('allCats');

render(html`<ul>${cats.map(template)}</ul>`, allCatsSection);

function changeStatus(e) {
    const infoSection = e.target.parentElement.querySelector('div');

    e.target.textContent == 'Show status code' ? e.target.textContent = "Hide status code" : e.target.textContent = 'Show status code'
    infoSection.style.display == 'none' ? infoSection.style.display = 'block' : infoSection.style.display = 'none';
};
*/

const template = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${() => changeStatus(cat)}>${cat.info ? 'Hide' : 'Show'} status code</button>
        ${cat.info ? html`<div class="status" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>` : null}
    </div>
</li>`;

const allCatsSection = document.getElementById('allCats');
cats.forEach(cat => cat.info = false);
update();

function update() {
    render(html`<ul>${cats.map(template)}</ul>`, allCatsSection);
};

function changeStatus(cat) {
    cat.info = !cat.info;
    update();
};
