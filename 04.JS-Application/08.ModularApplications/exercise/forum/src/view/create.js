import { createTopic } from '../api/data.js';
import { input } from '../common/input.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (onSubmit, errorMsg, errors, values) => html`
    <div class="narrow center">
        <h1>Create new Topic</h1>
        <form @submit=${onSubmit}>
            ${errorMsg ? html`<p class="error-msg">${errorMsg}</p>` : null}
            ${input('Topic Title', 'text', 'title', values.title, errors.title)}
            ${input('Content', 'textarea', 'content', values.content, errors.content)}
            <input class="action" type="submit" value="Publish Topic">
        </form>
    </div>`;

export function createPage(ctx) {

    update();

    function update(errorMsg = "", errors = {}, values = {}) {
        ctx.render(createTemplate(createSubmitHandler(onSubmit, 'title', 'content'), errorMsg, errors, values));
    };

    async function onSubmit(data) {
        try {
            const missing = Object.entries(data).filter(([k, v]) => v == "");
            if (missing.length > 0) {
                const errors = missing.reduce((a, [k, v]) => Object.assign(a, { [k]: true }), {});
                throw {
                    error: new Error('All fields are required!'),
                    errors
                };
            };

            const result = await createTopic(data);
            ctx.page.redirect('/topics/' + result._id);

        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors, data);
        };

    };
};

