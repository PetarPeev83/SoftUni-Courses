import { html, render } from "../../node_modules/lit-html/lit-html.js";


const notificationTemplate = (message) => html`
    <section id="notification" @click=${clearNotify}>
        ${message}
        <span style="margin-left: 32px">&#10008</span>
    </section>`;

const container = document.createElement('div');
document.body.appendChild(container);

export function notify(message) {
    render(notificationTemplate(message), container);
    setTimeout(clearNotify, 3000);  // правим функцията clearNotify да се извика след 3 секунди;
};

export function clearNotify() {
    render("", container);
};