function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    loadContacts();
};
attachEvents();

const list = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');
list.addEventListener('click', onDelete);

async function onDelete(event) {
    const id = event.target.dataset.id; // triabva purvo da sme napravili butona s atribut data-id , za da moje da dostupim dataset.id
    if (id != undefined) {
        // console.log(id);
        await deleteContact(id);
        // loadContacts();   // moje i da viknem loadContacts vmesto da go mahame ot DOM no e po bavno
        event.target.parentElement.remove();  
    };
};
async function loadContacts() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const res = await fetch(url);
    const data = await res.json();
    // list.replaceChildren();
    list.replaceChildren(...Object.values(data).map(createItem));
    // console.log(Object.values(data));
};
async function onCreate() {
    const person = personInput.value;
    const phone = phoneInput.value;

    const result = await createContact({ person, phone });

    list.appendChild(createItem(result));

    personInput.value = "";
    phoneInput.value = "";
};
async function createContact(contact) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    };

    const res = await fetch(url, options);
    const result = await res.json();

    // console.log(data);
    return result;
};
async function deleteContact(id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    const options = {
        method: 'delete'
    };

    const res = await fetch(url, options);
    const result = await res.json();

    return result;
};
function createItem(contact) {
    let li = document.createElement('li');
    li.textContent = `${contact.person}: ${contact.phone}`;
    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('data-id', contact._id);
    li.appendChild(delBtn);

    return li;
}