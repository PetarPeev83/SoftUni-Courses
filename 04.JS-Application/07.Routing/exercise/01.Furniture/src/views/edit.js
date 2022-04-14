import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFurniture, getDetailsById } from "../api/data.js";

const editTemplate = (item, onSubmit, make, model, year, desc, price, image) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control ${make ? " is-valid" : "is-invalid" }" id="new-make" type="text" name="make"
                        .value=${item.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control ${model ? " is-valid" : "is-invalid" }" id="new-model" type="text"
                        name="model" .value=${item.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control ${year ? " is-valid" : "is-invalid" }" id="new-year" type="number"
                        name="year" .value=${item.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control ${desc ? " is-valid" : "is-invalid" }" id="new-description" type="text"
                        name="description" .value=${item.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control ${price ? " is-valid" : "is-invalid" }" id="new-price" type="number"
                        name="price" .value=${item.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control ${image ? " is-valid" : "is-invalid" }" id="new-image" type="text" name="img"
                        .value=${item.img}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material" .value=${item.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit" />
            </div>
        </div>
    </form>`;

export async function editPage(ctx) {
    console.log('edit page', ctx.params.id);
    const id = ctx.params.id;
    const item = await getDetailsById(id);
    // console.log(item);

    ctx.render(editTemplate(item, onSubmit, item.make, item.model, item.year, item.description, item.price, item.img));

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

        ctx.render(editTemplate(data, onSubmit, data.make.length >= 4, data.model.length >= 4, (data.year >= 1950 && data.year <= 2050),
            data.description.length > 10, data.price > 0, data.img.length > 0))

        if (data.make.length < 4) {
            alert('Make must be at least 4 symbols long');
            return;
        } else if (data.model.length < 4) {
            alert('Model must be at least 4 symbols long');
            return;
        } else if (data.year < 1950 || data.year > 2050) {
            alert('Year must be between 1950 and 2050');
            return;
        } else if (data.description.length < 10) {
            alert('Description must be more than 10 symbols');
            return;
        } else if (data.price <= 0) {
            alert('Price must be a positive number');
            return;
        } else if (data.img == "") {
            alert('Image URL is required');
            return;
        };

        await editFurniture(item._id, data);

        ctx.page.redirect('/');
    };
};