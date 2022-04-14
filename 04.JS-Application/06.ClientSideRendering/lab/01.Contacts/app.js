import { html, render } from "./node_modules/lit-html/lit-html.js";
import { contacts } from "./contacts.js";

const contactTemplate = (data) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button class="detailsBtn" @click=${showDetails}>Show Details</button>
        <div class="details" id=${data.id} style="display: none;">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>`;


start();

function start() {
    const container = document.getElementById('contacts');

    render(contacts.map(contactTemplate), container); //render(podaden element ili elementi , za kude da go zakachim);
};

function showDetails(e) {
    // console.log(e.target);
    const detailsSection = e.target.parentElement.querySelector('.details');

    e.target.textContent == 'Show Details' ? e.target.textContent = "Hide details" : e.target.textContent = 'Show Details'
    detailsSection.style.display == 'none' ? detailsSection.style.display = 'block' : detailsSection.style.display = 'none';
};