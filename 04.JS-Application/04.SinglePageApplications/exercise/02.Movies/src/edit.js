import { showDetails } from "./details.js";
import { showView } from "./dom.js";

let lastSection = null;
let section = null;

export async function showEdit(movieId) {
    if (lastSection == null) {
        section = document.getElementById('edit-movie');
        lastSection = section
    } else {
        section = lastSection;
    }
    const form = section.querySelector('form');
    form.addEventListener('submit', onEdit);

    section.remove();
    showView(section);

    const url = 'http://localhost:3030/data/movies/' + movieId;

    const movieData = await getMovie();

    let title = section.querySelector('#title');
    let description = section.querySelector('[name="description"]');
    let img = section.querySelector('#imageUrl')

    title.value = movieData.title;
    description.value = movieData.description;
    img.value = movieData.img;

    async function onEdit(e) {
        e.preventDefault();
        const userData = JSON.parse(sessionStorage.getItem('userData'));

        try {
            const res = await fetch(url, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json",
                    'X-Authorization': userData.token
                },
                body: JSON.stringify({
                    title: title.value,
                    description: description.value,
                    img: img.value
                })
            });
            if (res.ok != true) {
                const error = await res.json();
                throw new Error(error.message);
            };
            const data = await res.json();

            // console.log(data);

        } catch (error) {
            alert(error.message);
        };
        title.value = "";
        description.value = "";
        img.value = "";

        showDetails(movieId);
    };

    async function getMovie() {

        const getMovieRes = await fetch(url)

        const getMovieData = await getMovieRes.json();

        // console.log(getMovieData);
        return getMovieData;
    }
};



/* 
Object { _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a",
 title: "Wonder Woman 1984", 
 description: "Diana must contend with a work colleague and businessman,
  whose desire for extreme wealth sends the world down a path of destruction, 
  after an ancient artifact that grants wishes goes missing.", 
  img: "https://pbs.twimg.com/media/ETINgKwWAAAyA4r.jpg",
   _createdOn: 1614935181470,
    _id: "143e5265-333e-4150-80e4-16b61de31aa0" }
*/