function blackSea(input){


let price = Number(input)
let fullPrice = price * 7.61
let discount = fullPrice * 0.18
let total = fullPrice - discount





console.log('The final price is : '+ total +' lv.')
console.log('The discount is : '+ discount + ' lv.')
}
blackSea(1000)