function radiansToDegrees(input){

let radians = Number(input[0]);
let degreece = Math.round(radians * 180 / Math.PI);

console.log(degreece);
}
radiansToDegrees([6.2832])