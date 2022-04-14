const tbody = document.querySelector('tbody');
const createForm = document.getElementById('createForm');
const editForm = document.getElementById('editForm');
editForm.addEventListener('submit' , onEditSubmit);

document.getElementById('loadBooks').addEventListener('click', loadBooks);
createForm.addEventListener('submit', onCreate);
tbody.addEventListener('click', onTableClick);


loadBooks();

async function onEditSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const author = formData.get('author').trim();
    const title = formData.get('title').trim();
    const id = formData.get('id').trim();
    
    const result = await updateBook(id,{ author, title });

    event.target.reset();
    createForm.style.display = "";
    editForm.style.display = "none";
    
    loadBooks();
};
function onTableClick(event) {
    if (event.target.id == 'editBtn') {
        // console.log('edit');
        onEdit(event.target);
    } else if (event.target.id == 'delBtn') {
        // console.log('delete');
        onDelete(event.target);
    };
};
async function onEdit(button) {
    const id = button.parentElement.dataset.id;
    const book = await loadBookById(id);

    createForm.style.display = "none";
    editForm.style.display = "";

    editForm.querySelector('[name="id"]').value = id;
    editForm.querySelector('[name="title"]').value = book.title;
    editForm.querySelector('[name="author"]').value = book.author;

};
async function loadBookById(id) {
    const book = await universalRequestFunction('http://localhost:3030/jsonstore/collections/books/' + id);
    return book;
};
async function onDelete(button) {
    const id = button.parentElement.dataset.id;
    await deleteBook(id);
    button.parentElement.parentElement.remove();
};
async function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const author = formData.get('author').trim();
    const title = formData.get('title').trim();
    if (author == "" || title == "") {
        alert('empty field');
        throw new Error('empty field')
    }
    const result = await createBook({ author, title });
    tbody.appendChild(createRow(result._id, result));
    event.target.reset();
};
async function loadBooks() {
    const books = await universalRequestFunction('http://localhost:3030/jsonstore/collections/books');

    const result = Object.entries(books).map(([id, book]) => createRow(id, book));
    tbody.replaceChildren(...result);
    // console.log(result);
};
function createRow(id, book) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
<td>${book.author}</td>
<td data-id=${id}>
<button id="editBtn">Edit</button>
<button id="delBtn">Delete</button>
</td>`;
    return row; // data-id slagame za da izvikame po lesno po kusno id-to sus "dataset.id";
};
async function universalRequestFunction(url, options) {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    };
    const data = await response.json();

    return data;
};
async function createBook(book) {
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const result = await universalRequestFunction('http://localhost:3030/jsonstore/collections/books', options);

    return result;
};
async function updateBook(id, book) {
    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const result = await universalRequestFunction('http://localhost:3030/jsonstore/collections/books/' + id, options);

    return result;
};
async function deleteBook(id) {
    const options = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const result = await universalRequestFunction('http://localhost:3030/jsonstore/collections/books/' + id, options);

    return result;
};