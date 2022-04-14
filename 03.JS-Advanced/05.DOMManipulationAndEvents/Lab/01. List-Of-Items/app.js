function addItem() {

    let newElement = document.getElementById('newItemText').value;
    let li = document.createElement('li');

    if (newElement.length > 0) {
        // li.appendChild(document.createTextNode(newElement));   
        li.textContent = newElement;
        document.getElementById('items').appendChild(li);    //закача елемента в края
        // document.getElementById('items').prepend(li);     // закача елемента в началото
        document.getElementById('newItemText').value = "";
    }
}