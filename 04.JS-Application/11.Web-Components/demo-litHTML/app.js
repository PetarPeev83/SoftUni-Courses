import { html, render } from './node_modules/lit-html/lit-html.js';

const articleTemplate = (title, content) => html`
<style>
article {
   margin: 32px;
   background-color: whitesmoke;
   box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);
   padding: 8px; 
}
article h2 {
    background-color: #ccc;
    padding: 8px 16px;
}
article div {
    padding: 16px;
}
</style>

<article>
    <h2>${title}</h2>
    <div>
        <p>${content}</p>
    </div>
</article>`;

class MyArticle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        render(articleTemplate('Title', 'Content'), this.shadowRoot, { eventContext: this });
    };
};

customElements.define('my-article', MyArticle);