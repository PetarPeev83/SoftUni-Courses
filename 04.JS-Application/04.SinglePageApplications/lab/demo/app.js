// import { sumNum, numProduct } from './module.js';
import * as numberOperations from './module.js';  // importirame vsichko koeto e eksportnato vuv faila

import { myArr } from './data.js';

// import Person from './Person.js';
import Person , {anotherFunc} from './Person.js';






// console.log(sumNum(5, 5));
// console.log(numProduct(5, 5));

console.log(numberOperations.sumNum(2, 2));
console.log(numberOperations);

console.log(new Person('Pesho', 37));
console.log(Person);

myArr.push(10);
console.log(myArr);

anotherFunc();