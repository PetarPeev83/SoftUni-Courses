import { html, render } from 'https://unpkg.com/lit-html?module'; // izpolzvame lit bibliotekata bez instalirane !!


import { html, render } from './node_modules/lit-html/lit-html.js';
//ako go insatlirame v proekta triabva da navigirame do /node_modules/lit-html/lit-html.js


 function start() {
    const main = document.querySelector('main');

    const result = html`<h1>Hello World!</h1>`;
    // console.log(result);
    render(result, main);

};

start();