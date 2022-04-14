function filterEmployees(input, criteria) {
    [option, value] = criteria.split('-');
    let employees = JSON.parse(input).filter(employee => employee[option] == value);
    employees.forEach(element =>
        console.log(`${employees.indexOf(element)}. ${element.first_name} ${element.last_name} - ${element.email}`));
}


// let result = [];
// let filtred = employees
// for (let employee of employees) {
//     if (employee[option] == value) {
//         result.push(employee);
//     }
// }
//     let counter = 0;
//     for (let current of employees) {
//         console.log(`${counter}. ${current.first_name} ${current.last_name} - ${current.email}`);
//         counter++;
//     }
// }
// filterEmployees(`[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'gender-Female');

filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');