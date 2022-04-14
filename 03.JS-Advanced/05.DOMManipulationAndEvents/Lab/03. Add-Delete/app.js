function addItem() {
    let newElement = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = newElement;

    let button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    li.appendChild(button);
    button.addEventListener('click', removeElement);
    document.getElementById('items').appendChild(li);

    function removeElement(event) {
        let parentToDelete = event.target.parentNode;
        parentToDelete.remove();
    }
    document.getElementById('newItemText').value = "";
}