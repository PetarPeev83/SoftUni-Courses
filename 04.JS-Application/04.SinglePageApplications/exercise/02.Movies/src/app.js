// create placeholder modules for every raw
// configure and test navigation
// adding ID in the HTML in the elements where we need 
// implement modules
// - create async functions for requests
// - implement DOM logic
//
// Order of views :
// - catalog (home view)
// - login/register
// - logout
// - create
// - details
// - likes
// - edit
// - delete

import { showHome } from "./home.js";         // VSICHKI FUNKCII koito iskame da izpolzvame tribva da sa exportnati za da gi importnem !!!
import { showLogin } from "./login.js";
import { showRegister } from "./register.js"
import { showDetails } from "./details.js";
import { showCreate } from "./create.js";
import { showEdit } from "./edit.js";

const nav = document.querySelector('nav');
const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
};

document.getElementById('logoutBtn').addEventListener('click', onLogout);
nav.addEventListener('click', (event) => {
    const view = views[event.target.id];
    event.preventDefault(); //------------------------- ZADULJITELNO !!!
    if (typeof view == 'function') {
        view();
    };
});

updateNav();

showHome();


export function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        nav.querySelector('#welcomeMsg').textContent = userData.email;
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = "block");
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = "none");
        
    } else {
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = "none");
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = "block");
    }
};

async function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    const { token } = JSON.parse(sessionStorage.getItem('userData'));

    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': token
        }
    });
    sessionStorage.removeItem('userData');
    updateNav();
    showLogin();
    // document.querySelector('main #add-movie-button').style.display = 'block';
};

// window.showHome = showHome;         // kogato  scripta e type MODULE ("<script src="/src/app.js" type="module"></script>") triabva da
// window.showDetails = showDetails;   // zakachim funkciite na window za da moje da gi dostupvame zashtoto funkciite sa vutre v modula
// window.showCreate = showCreate;     
