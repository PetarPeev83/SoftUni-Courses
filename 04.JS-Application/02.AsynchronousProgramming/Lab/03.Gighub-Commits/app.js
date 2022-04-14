function loadCommits() {
    let username = document.getElementById('username').value;
    let reposName = document.getElementById('repo').value;
    let ul = document.getElementById('commits');

    fetch(`https://api.github.com/repos/${username}/${reposName}/commits`)
        .then((response) => {
            if (response.ok == false) {
                throw new Error(`Error: ${response.status} (Not Found)"`);
            }
            return response.json();
        })
        .then(handleResponse)
        .catch(handleErrors);

    function handleResponse(data) {
        ul.innerHTML = "";

        for (let current of data) {
            const li = document.createElement('li');
            li.textContent = `${current.commit.author.name}: ${current.commit.message}`
            ul.appendChild(li);
        };
    };
    function handleErrors(error) {
        ul.innerHTML = "";
        const li = document.createElement('li');
        li.textContent = `${error.message}`;
        ul.appendChild(li);
    };
};