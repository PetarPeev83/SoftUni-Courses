import { showCatalogPage } from "./views/catalog.js";
import { showCreatePage } from "./views/create.js";
import { showDetailsPage } from "./views/details.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { showRegisterPage } from "./views/register.js";
import { showSection } from "./dom.js";
import { logout } from "./api/api.js";



const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'catalogLink': 'catalog',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create'
};

const views = {
    'home': showHomePage,
    'catalog': showCatalogPage,
    'login': showLoginPage,
    'register': showRegisterPage,
    'create': showCreatePage,
    'details': showDetailsPage
};

const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);

document.getElementById('logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();

    // sessionStorage.clear();
    updateNav();
    goTo('home');
});

const context = {
    goTo,
    showSection,
    updateNav
};

//start application in homeView
updateNav();
goTo('home');

function onNavigate(event) {
    const name = links[event.target.id];
    if (name) {
        event.preventDefault();
        goTo(name);
    };
};

function goTo(name, ...params) {
    const view = views[name];
    if (typeof view == 'function') {
        view(context, ...params);
    };
};

function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user')].forEach(li => li.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(li => li.style.display = 'block');
    }
};