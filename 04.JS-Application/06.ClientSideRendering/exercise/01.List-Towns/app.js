import { html, render } from './node_modules/lit-html/lit-html.js';

document.querySelector('form').addEventListener('submit', loadTowns);
const div = document.getElementById('root');

const template = (town) => html`
<ul>
    <li>${town}</li>
</ul>`;

function loadTowns(e) {
    e.preventDefault();

    const towns = document.querySelector('#towns').value.split(', ');
    render(towns.map(template), div);
};