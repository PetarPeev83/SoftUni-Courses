function lockedProfile() {
    document.getElementById('main').addEventListener('click', onclick);
    createProfiles();
    document.getElementById('main').replaceChildren();
};

function onclick(e) {
    if (e.target.tagName == 'BUTTON') {     //proverkata na tagName zashtoto e s delegiran listener 
        let profile = e.target.parentElement
        let infoDiv = profile.querySelector('.hiddenInfo');
        let hiddenInput = profile.querySelectorAll('.hiddenInfo input');
        let unlock = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (unlock) {
            if (e.target.textContent == "Show more") {
                e.target.textContent = "Hide it";
                infoDiv.style.display = "inline-block";
                hiddenInput.forEach(i => {
                    i.style.display = "inline-block";
                });
                // console.log(hiddenInput);
            } else {
                e.target.textContent = "Show more";
                infoDiv.style.display = '';
                hiddenInput.forEach(i => {
                    i.style.display = "";
                });
                // console.log(hiddenInput);
            };
        };
    };
};
async function loadProfiles() {

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
};
async function createProfiles() {
    let input = await loadProfiles();
    const mainSection = document.getElementById('main');

    Object.values(input).forEach(p => {
        let div = document.createElement('div');
        div.className = 'profile';
        div.innerHTML = `<img src="./iconProfile2.png" class="userIcon"/>
<label>Lock</label>
<input type="radio" name="user1Locked" value="lock" checked>
<label>Unlock</label>
<input type="radio" name="user1Locked" value="unlock"><br>
<hr>
<label>Username</label>
<input type="text" name="user1Username" value=${p.username} disabled readonly />`;
        let hiddenDiv = document.createElement('div');
        hiddenDiv.className = 'hiddenInfo';
        hiddenDiv.innerHTML = `<hr><label>Email:</label>
<input type="email" name="user1Email" value=${p.email} disabled readonly />
<label>Age:</label>
<input type="email" name="user1Age" value=${p.age} disabled readonly />
</div>`;
        let button = document.createElement('button');
        button.textContent = "Show more";
        div.appendChild(hiddenDiv);
        div.appendChild(button);
        mainSection.appendChild(div);
    });
    // console.log(Object.values(input));
};
