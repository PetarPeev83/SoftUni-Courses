import { login } from "../api/data.js";
import { html } from "../lib.js";
// import { updateUserNav } from "../middlewares/decorateContext.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input id="submitBtn" class="button submit" type="submit" value="Login">
        </fieldset>
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