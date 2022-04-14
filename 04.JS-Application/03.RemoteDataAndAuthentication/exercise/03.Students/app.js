const tableBody = document.querySelector('#results tbody');
const studentForm = document.getElementById('form');
// document.getElementById('submit').addEventListener('click', addStudent)
studentForm.addEventListener('submit', addStudent);
const url = 'http://localhost:3030/jsonstore/collections/students';
loadStudents();

async function loadStudents() {

    const response = await fetch(url);
    const data = await response.json();

    tableBody.replaceChildren(...Object.values(data).map(createElements));
    // console.log(Object.values(data));
    // return Object.values(data);
};

async function addStudent(e) {
    e.preventDefault();
    const formData = new FormData(studentForm);

    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const facultyNumber = formData.get('facultyNumber').trim();
    const grade = formData.get('grade').trim();

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });
    studentForm.reset();
    loadStudents();
    // const result = await response.json();
    // console.log(result);
}

function createElements(students) {
    const tr = document.createElement('tr');
    const thFname = document.createElement('th');
    thFname.textContent = `${students.firstName}`;
    tr.appendChild(thFname);
    const thLname = document.createElement('th');
    thLname.textContent = `${students.lastName}`;
    tr.appendChild(thLname);
    const thNumber = document.createElement('th');
    thNumber.textContent = `${students.facultyNumber}`;
    tr.appendChild(thNumber);
    const thGrade = document.createElement('th');
    thGrade.textContent = `${students.grade}`;
    tr.appendChild(thGrade);
    return tr;
};