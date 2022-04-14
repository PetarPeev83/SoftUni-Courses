import { showView } from "./dom.js";
import { showHome } from "./home.js";

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onCreate)
section.remove();

export function showCreate() {
    showView(section);
};

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl').trim();

    form.reset();

    // console.log(title , description , imageUrl);
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData);
    try {
        if (!title || !description || !img) {
            throw new Error('All sections mist to be filled');
        };
        const res = await fetch('http://localhost:3030/data/movies', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                title,
                description,
                img
            })
        });
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        };
        const data = await res.json();

        console.log(data);
        showHome();
    } catch (error) {
        alert(error.message);
    }
}