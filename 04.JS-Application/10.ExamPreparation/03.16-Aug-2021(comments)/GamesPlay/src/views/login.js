import { login } from "../api/data.js";
import { html } from "../lib.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`;


export async function loginPage(ctx) {

    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        // event.target.querySelector('#submitBtn').disabled = true;

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == "" || password == "") {
            alert('All fields are required!')
            // event.target.querySelector('#submitBtn').disabled = false;
            return ctx.render(loginTemplate(onSubmit));
        };

        await login(email, password);
        ctx.updateUserNav();

        ctx.page.redirect('/');
    };
};