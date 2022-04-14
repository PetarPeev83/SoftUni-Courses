import { html, render } from "./node_modules/lit-html/lit-html.js";

const selectTemplate = items => html`
<select id="menu">
    ${items.map(item => html`<option value=${item._id}>${item.text}</option>`)}
</select>`;

const root = document.querySelector('div');
document.querySelector('form').addEventListener('submit', addItem);

getData();

async function getData() {
    const res = await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`);
    const data = await res.json();

    update(Object.values(data));
};
async function addItem(e) {
    e.preventDefault();
    const text = document.getElementById('itemText');
    if (!text.value) {
        alert('Empty Field !');
        return;
    };

    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text.value })
    });

    text.value = "";

    if (res.ok) {
        alert('Successfully added!')
        getData();
    };
};

function update(items) {

    render(selectTemplate(items), root);

};
