import { updateNav } from "./app.js";
import { showView } from "./dom.js";
import { showHome } from "./home.js";


const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onRegister);
section.remove();

export function showRegister() {
    showView(section);
};

async function onRegister(event) {
    event.preventDefault();

    console.log('register clicked');

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if (password.length == 0 || repeatPassword.length == 0 || email.length == 0) {
        return;
    };
    try {
        if (password.length < 6) {
            throw new Error(`The password should be at least 6 characters long`);
        };
        if (password !== repeatPassword) {
            throw new Error(`The password didn't match`);
        };
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        };
        const data = await res.json();
        sessionStorage.setItem('userData', JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }));

        form.reset()   // izchistva poletata nakraia ako sme se lognali uspeshmo
        updateNav();
        showHome();    // izvikvame nachalnata stranica
    } catch (err) {
        alert(err.message);
    };
};