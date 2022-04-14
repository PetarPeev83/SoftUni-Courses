window.addEventListener('load', solve);

function solve() {
    [genre, songName, songAuthor, creationDate] = document.querySelectorAll('.container-text input');
    document.getElementById('add-btn').addEventListener('click', collectSong);
    let totalLikes = document.querySelector('#total-likes p');
    let likesCounter = 0;
    let savedSongs = document.querySelector('.saved-container');

    function collectSong(e) {
        e.preventDefault();
        if (genre.value.length == 0 || songName.value.length == 0 || songAuthor.value.length == 0 || creationDate.value.length == 0) {
            return;
        }
        let allHits = document.querySelector('.all-hits-container');
        
        let div = document.createElement('div');
        div.setAttribute('class', 'hits-info');

        let img = document.createElement('img');
        img.setAttribute('src', './static/img/img.png');
        div.appendChild(img);

        let genreH2 = document.createElement('h2');
        genreH2.textContent = `Genre: ${genre.value}`;
        div.appendChild(genreH2);

        let nameH2 = document.createElement('h2');
        nameH2.textContent = `Name: ${songName.value}`;
        div.appendChild(nameH2);

        let authorH2 = document.createElement('h2');
        authorH2.textContent = `Author: ${songAuthor.value}`;
        div.appendChild(authorH2);

        let dateH3 = document.createElement('h3');
        dateH3.textContent = `Date: ${creationDate.value}`;
        div.appendChild(dateH3);

        let saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'save-btn');
        saveBtn.addEventListener('click', (e) => {
            savedSongs.appendChild(e.target.parentElement);
            // likeBtn.style.visibility = 'hidden';
            // saveBtn.style.visibility = 'hidden';
            e.target.parentElement.children[6].remove();
            e.target.parentElement.children[5].remove();

        });
        saveBtn.textContent = 'Save song';
        div.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.setAttribute('class', 'like-btn');
        likeBtn.textContent = 'Like song';
        div.appendChild(likeBtn);
        likeBtn.addEventListener('click', () => {
            likesCounter++;
            likeBtn.disabled = true;
            totalLikes.textContent = `Total Likes: ${likesCounter}`;
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'delete-btn');
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

        allHits.appendChild(div);

        [genre, songName, songAuthor, creationDate].map(element => element.value = "");
    }
}