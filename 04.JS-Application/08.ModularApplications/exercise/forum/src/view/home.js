import { getTopicCount } from '../api/data.js';
import { html, until } from '../lib.js';

const homeTemplate = (countPromise) => html`
<h1>Scripters Forum</h1>
<div class="splash">
    <p>Welcome to Scripters Forum!</p>
    <div>
        <a href="/topics">Browse ${until(countPromise, '...')} topics</a>
    </div>
</div>`;

export function homePage(ctx) {
    ctx.render(homeTemplate(loadHome()));
};

async function loadHome() {
    const count = getTopicCount();

    return count;
};