import { html, render } from "./node_modules/lit-html/lit-html.js";

const tbody = document.querySelector('tbody');
const input = document.getElementById('searchField');
document.getElementById('searchBtn').addEventListener('click', onSearch);

const studentRowTemplate = (student) => html`
<tr class=${student.match ? 'select' : ""}>
   <td>${student.item.firstName} ${student.lastName}</td>
   <td>${student.item.email}</td>
   <td>${student.item.course}</td>
</tr>`;

let students;

start();

async function start() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();
   students = Object.values(data).map(st => ({ item: st, match: false }));

   update();
};

function update() {
   render(students.map(studentRowTemplate), tbody);
};

function onSearch() {
   const value = input.value.trim().toLocaleLowerCase();

   for (let student of students) {
      student.match = Object.values(student.item).some(v => value && v.toLocaleLowerCase().includes(value)); // some vrushta true/false ,
      //                    (proverqvame dali value e prazno)↑↑↑                        koeto zadavame na students.match za da smeni klasa;
      input.value = "";
      update();
   };
};