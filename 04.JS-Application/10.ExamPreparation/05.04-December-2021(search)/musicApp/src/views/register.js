import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onSubmit) => html`
<section id="registerPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Register</legend>

            <label for="email" class="vhide">Email</label>
            <input id="email" class="email" name="email" type="text" placeholder="Email">

            <label for="password" class="vhide">Password</label>
            <input id="password" class="password" name="password" type="password" placeholder="Password">

            <label for="conf-pass" class="vhide">Confirm Password:</label>
            <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

            <button type="submit" class="register">Register</button>

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>`;

// const registerTemplate = (onSubmit) => html`
// <section id="register-page" class="content auth">
//     <form @submit=${onSubmit} id="register">
//         <div class="container">
//             <div class="brand-logo"></div>
//             <h1>Register</h1>

//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email" placeholder="">

//             <label for="pass">Password:</label>
//             <input type="password" name="password" id="register-password">

//             <label for="con-pass">Confirm Password:</label>
//             <input type="password" name="confirm-password" id="confirm-password">

//             <input class="btn submit" type="submit" value="Register">

//             <p class="field">
//                 <span>If you already have profile click <a href="#">here</a></span>
//             </p>
//         </div>
//     </form>
// </section>`;


export async function registerPage(ctx) {

    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('conf-pass').trim();


        if (email == "" || password == "" || rePass == "") {
            alert('All fields are required!');
            return ctx.render(registerTemplate(onSubmit));
        };
        if (password != rePass) {
            alert('Passwords don\'t match!');
            return ctx.render(registerTemplate(onSubmit));
        };

        await register(email, password);

        ctx.updateUserNav();

        ctx.page.redirect('/');
    };
};