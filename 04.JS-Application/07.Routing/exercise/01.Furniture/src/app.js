// РУТИРАНЕ !!!

import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myPage } from './views/myFurniture.js';
import { registerPage } from './views/register.js';

const main = document.querySelector('.container');

page('/', addToContext, dashboardPage);   //     хваща когато сме на  началния екран (винаги подава контекст на следващите функции);
page('/details/:id', addToContext, detailsPage);
page('/create', addToContext, createPage);
page('/edit/:id', addToContext, editPage);
page('/register', addToContext, registerPage);
page('/login', addToContext, loginPage);
page('/my-furniture', addToContext, myPage);

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav();

//Start Application !!!
page.start();

// import * as api from './api/data.js';
// window.api = api; // закачам всички функции от api.js за window за да ги тествам дали всичко е ОК;

function addToContext(ctx, next) {
    ctx.render = (content) => render(content, main); //вкарваме рендера в контекста който отива в следващата ф-ия и може да го извикаме с ctx.render
    ctx.setUserNav = setUserNav; // добавяме и setUserNav като свойство на ctx за да го използваме по късно;
    next(); //задължително - за да извика следващата чеинната функция в page() , която да се изпълни;
};

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    };
};