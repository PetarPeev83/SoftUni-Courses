function loadRepos() {
	let username = document.getElementById('username').value;
	let reposList = document.getElementById('repos');

	fetch(`https://api.github.com/users/${username}/repos`)
		.then((response) => {
			if (response.ok == false) {
				throw new Error(`${response.status}: ${response.statusText}`);
			}
			return response.json();
		})
		.then(handleResponse)
		.catch(handleErrors);

	function handleResponse(data) {
		reposList.innerHTML = "";

		for (let repo of data) {
			const li = document.createElement('li');
			li.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`
			reposList.appendChild(li);
		};
	};
	function handleErrors(error) {
		reposList.innerHTML = "";
		reposList.textContent = `${error.message}`;
	};
};