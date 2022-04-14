import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFurniture } from "../api/data.js";
import { notify, clearNotify } from "../api/notification.js";


const createTemplate = (onSubmit, make, model, year, desc, price, img) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${make ? " is-valid" : "is-invalid" }" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${model ? " is-valid" : "is-invalid" }" id="new-model" type="text"
                        name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${year ? " is-valid" : "is-invalid" }" id="new-year" type="number"
                        name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${desc ? " is-valid" : "is-invalid" }" id="new-description" type="text"
                        name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${price ? " is-valid" : "is-invalid" }" id="new-price" type="number"
                        name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${img ? " is-valid" : "is-invalid" }" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`;

export async function createPage(ctx) {
    // console.log('create page');

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target); 5

        const data = {
            make: formData.get('make').trim(),
            model: formData.get('model').trim(),
            year: Number(formData.get('year').trim()),
            description: formData.get('description').trim(),
            price: Number(formData.get('price').trim()),
            img: formData.get('img').trim(),
            material: formData.get('material').trim(),
        };

        ctx.render(createTemplate(onSubmit, data.make.length >= 4, data.model.length >= 4, (data.year >= 1950 && data.year <= 2050),
            data.description.length > 10, data.price > 0, data.img.length > 0))

        if (data.make.length < 4) {
            return notify('Make must be at least 4 symbols long');
            // return alert('Make must be at least 4 symbols long');
        } else if (data.model.length < 4) {
            return alert('Model must be at least 4 symbols long');
        } else if (data.year < 1950 || data.year > 2050) {
            return alert('Year must be between 1950 and 2050');
        } else if (data.description.length < 10) {
            return alert('Description must be more than 10 symbols');
        } else if (data.price <= 0) {
            return alert('Price must be a positive number');
        } else if (data.img == "") {
            return alert('Image URL is required');
        };

        await createFurniture(data);

        clearNotify();

        ctx.page.redirect('/');
    };
};