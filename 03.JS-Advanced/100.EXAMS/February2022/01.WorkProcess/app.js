// window.addEventListener('load', solve);

function solve() {

    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthday = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    document.getElementById('add-worker').addEventListener('click', addWorker);
    const tbody = document.getElementById('tbody');
    let sum = document.getElementById('sum');
    let totalSum = 0;

    function addWorker(event) {
        event.preventDefault();

        if (firstName.value == "", lastName.value == "", email.value == "", birthday.value == "", position.value == "", salary.value == "") {
            return;
        };
        // console.log(sum.textContent);
        totalSum += Number(salary.value);
        sum.textContent = totalSum.toFixed(2);

        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${firstName.value}</td>
        <td>${lastName.value}</td>
        <td>${email.value}</td>
        <td>${birthday.value}</td>
        <td>${position.value}</td>
        <td>${salary.value}</td>`;

        let btnTd = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.className = 'fired';
        firedBtn.textContent = 'Fired';
        btnTd.appendChild(firedBtn);

        let editBtn = document.createElement('button');
        editBtn.className = 'edit';
        editBtn.textContent = 'Edit';
        btnTd.appendChild(editBtn);
        tr.appendChild(btnTd);

        tbody.appendChild(tr);

        firedBtn.addEventListener('click', (e) => {
            let parent = e.target.parentElement.parentElement;
            parent.remove();
            let salary2 = Number(parent.children[5].textContent);
            totalSum -= salary2;
            sum.textContent = totalSum.toFixed(2);
        });
        editBtn.addEventListener('click', (e) => {
            let parent = e.target.parentElement.parentElement;
            parent.remove();
            let salary2 = Number(parent.children[5].textContent);
            totalSum -= salary2;
            sum.textContent = totalSum.toFixed(2);

            firstName.value = parent.children[0].textContent;
            lastName.value = parent.children[1].textContent;
            email.value = parent.children[2].textContent;
            birthday.value = parent.children[3].textContent;
            position.value = parent.children[4].textContent;
            salary.value = salary2;
        });

        firstName.value = "";
        lastName.value = "";
        email.value = "";
        birthday.value = "";
        position.value = "";
        salary.value = "";
    };
};
solve();