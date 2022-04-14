function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let select = document.getElementById('menu');

    let opt = document.createElement('option');
    opt.textContent = text.value;
    opt.value = value.value;
    // console.log(opt);
    select.appendChild(opt);

    text.value = '';
    value.value = '';
}