let userData = null;
// loadData();

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    const logoutBtn = document.getElementById('logout');

    if (userData != null) {
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('.email span').textContent = userData.email;
        logoutBtn.disabled = true;
        //  console.log(userData);
    } else {
        document.getElementById('user').style.display = 'none';
        document.querySelector('.email span').textContent = 'guest';
        logoutBtn.disabled = false;
    };
    document.querySelector('.load').addEventListener('click', loadData);
    document.getElementById('logout').addEventListener('click', () => {
        sessionStorage.clear();
        window.location = '/index.html';
    });

    document.getElementById('addForm').addEventListener('submit', onCreateSubmit);
    document.getElementById('catches').addEventListener('click', deleteOrUpdate);
});

async function deleteOrUpdate(event) {
    const id = event.target.dataset.id;
    if (event.target.className == 'delete') {
        await deleteCatch(id);
        event.target.parentElement.remove();
    } else if (event.target.className == 'update') {
        const [angler, weight, species, location, bait, captureTime] = event.target.parentElement.querySelectorAll('input');
        if (angler.disabled == true) {
            [angler, weight, species, location, bait, captureTime].forEach(element => element.disabled = false);
        } else {
            const newData = {
                angler: angler.value,
                weight: weight.value,
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value,
            };
            updateCatch(id, newData);
            [angler, weight, species, location, bait, captureTime].forEach(element => element.disabled = true);
        }
    } else {
        return;
    }
};
async function updateCatch(id, newData) {
    const res = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token    // otorizirana zaiavka !!
        },
        body: JSON.stringify(newData)
    });
};
async function deleteCatch(catchId) {
    await fetch('http://localhost:3030/data/catches/' + catchId, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token    // otorizirana zaiavka !!
        }
    });
};
async function onCreateSubmit(event) {
    event.preventDefault();
    if (!userData) {
        window.location = '/login.html';
        return;
    };

    const formData = new FormData(event.target);

    // const angler = formData.get('angler');
    // const weight = formData.get('weight');
    // const species = formData.get('species');
    // const location = formData.get('location');
    // const bait = formData.get('bait');
    // const captureTime = formData.get('captureTime');
    // const token = formData.get('token');

    //  vmesto da vzimame vsichki poleta edno po edno (kakto gore) moje da gi vkarame v obekt (kakto dolu) !!!
    const data = [...formData].reduce((x, [key, value]) => Object.assign(x, { [key]: value }), {});

    try {
        if (Object.values(data).some(x => x == "")) {  //proverka dali poletata ne sa prazni !!!
            throw new Error('All fields are required!');
        };

        const res = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token    // otorizirana zaiavka !!
            },
            body: JSON.stringify(data)
        });
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        };

        loadData();
        event.target.reset();

    } catch (err) {
        alert(err.message);
    }

};
async function loadData() {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();

    document.getElementById('catches').replaceChildren(...data.map(createPreview));
    // console.log(data);
};
function createPreview(item) {

    const isOwner = (userData && item._ownerId == userData.id);  // true/false

    const element = document.createElement('div');
    element.className = 'catch';
    element.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${item.angler}" disabled>
<label>Weight</label>
<input type="text" class="weight" value="${item.weight}" disabled>
<label>Species</label>
<input type="text" class="species" value="${item.species}" disabled>
<label>Location</label>
<input type="text" class="location" value="${item.location}" disabled>
<label>Bait</label>
<input type="text" class="bait" value="${item.bait}" disabled>
<label>Capture Time</label>
<input type="number" class="captureTime" value="${item.captureTime}" disabled>
<button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ""}>Update</button>
<button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ""}>Delete</button>`;

    return element;
};
