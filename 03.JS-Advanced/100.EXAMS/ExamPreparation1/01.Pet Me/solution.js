function solve() {

    let [name, age, kind, currentOwner, addButton] = Array.from(document.getElementById('container').children); //ВАЖНО !!! Array.from !!!
    addButton.addEventListener('click', addAnimal);

    let adoptionUl = document.querySelector('#adoption ul');
    let adoptedSection = document.querySelector('#adopted ul');

    function addAnimal(e) {
        e.preventDefault();
        if (name.value.length == 0 || age.value.length == 0 || kind.value.length == 0 || currentOwner.value.length == 0 || isNaN(Number(age.value))) {
            return;
        };
        let li = document.createElement('li');

        let p = document.createElement('p');
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        li.appendChild(p);

        let span = document.createElement('span');
        span.textContent = `Owner: ${currentOwner.value}`;
        li.appendChild(span);

        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
        li.appendChild(contactBtn);

        contactBtn.addEventListener('click', selectPet);
        adoptionUl.appendChild(li);
        name.value = "";
        age.value = "";
        kind.value = "";
        currentOwner.value = "";
    };
    function selectPet(e) {
        let targetParent = e.target.parentElement;
        e.target.remove();
        let div = document.createElement('div');
        let newBtn = document.createElement('button');
        newBtn.addEventListener('click', adopt);
        newBtn.textContent = 'Yes! I take it!';
        inputField = document.createElement('input');
        inputField.setAttribute('placeholder', 'Enter your names');
        div.appendChild(inputField);
        div.appendChild(newBtn);
        targetParent.appendChild(div);
    };
    function adopt(e) {
        if (inputField.value.length > 0) {
            let li = e.target.parentElement.parentElement;
            let inputField = e.target.parentElement.children[0];
            adoptedSection.appendChild(li);
            e.target.remove();
            inputField.remove();
            li.children[1].remove();
            newSpan = document.createElement('span');
            newSpan.textContent = `New Owner: ${inputField.value}`;
            li.appendChild(newSpan);
            checkedBtn = document.createElement('button');
            checkedBtn.textContent = "Checked";
            checkedBtn.addEventListener('click', () => {
                li.remove();
            });
            li.appendChild(checkedBtn);
        };
    }
};


/*
function solve() {

    let [name, age, kind, currentOwner, addButton] = Array.from(document.getElementById('container').children);  // !!!!!!!!
    addButton.addEventListener('click', addAnimal);

    let adoptionUl = document.querySelector('#adoption ul');
    let adoptedSection = document.querySelector('#adopted ul');

    function addAnimal(e) {
        e.preventDefault();
        if (name.value.length == 0 || age.length == 0 || kind.value.length == 0 || currentOwner.value.length == 0 || isNaN(Number(age.value))) {
            return;
        };
        let li = document.createElement('li');

        let p = document.createElement('p');
        p.innerHTML += `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        li.appendChild(p);

        let span = document.createElement('span');
        span.textContent = `Owner: ${currentOwner.value}`;
        li.appendChild(span);

        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
        li.appendChild(contactBtn);

        contactBtn.addEventListener('click', (e) => {
            contactBtn.remove();
            let div = document.createElement('div');
            let newBtn = document.createElement('button');
            newBtn.textContent = 'Yes! I take it!';
            newBtn.addEventListener('click', (e) => {
                if (inputField.value.length > 0) {
                    adoptedSection.appendChild(li);
                    newBtn.remove();
                    inputField.remove();
                    span.remove();
                    newSpan = document.createElement('span');
                    newSpan.textContent = `New Owner: ${inputField.value}`;
                    li.appendChild(newSpan);
                    checkedBtn = document.createElement('button');
                    checkedBtn.textContent = "Checked";
                    checkedBtn.addEventListener('click', () => {
                        li.remove();
                    });
                    li.appendChild(checkedBtn);
                };
            });
            inputField = document.createElement('input');
            inputField.setAttribute('placeholder', 'Enter your names');
            div.appendChild(inputField);
            div.appendChild(newBtn);
            li.appendChild(div);
        });
        adoptionUl.appendChild(li);
        name.value = "";
        age.value = "";
        kind.value = "";
        currentOwner.value = "";
    };
};
*/