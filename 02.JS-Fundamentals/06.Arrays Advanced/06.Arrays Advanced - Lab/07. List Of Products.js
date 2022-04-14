function listOfProducts(listArr) {

    let sortedList = listArr.sort();
    let numInList = 1;

    for (let product of sortedList) {
        console.log(`${numInList}.${product}`);
        numInList++;
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
