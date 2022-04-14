import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurniture } from "../api/data.js";
import { itemTemplate } from "./common/item.js";

const catalogTemplate = (data, page) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
${page > 1 ? html`<a class="page-index btn btn-info" href=${`?page=${page - 1}`}>&lt;Prev</a>` : ""}
<a class="page-index btn btn-info" href=${`?page=${page + 1}`}>Next &gt;</a>
<div class="row space-top">
    ${data.map(itemTemplate)}
</div>`;

export async function catalogPage(ctx) {
    // console.log('dashboard page');
    const page = Number(ctx.querystring.split('=')[1] || 1); // za PAGONATION ako purvoto e undefined shte vurne 1
    // console.log(page);

    const data = await getFurniture(page);
    // console.log(data);
    ctx.render(catalogTemplate(data, page));
};