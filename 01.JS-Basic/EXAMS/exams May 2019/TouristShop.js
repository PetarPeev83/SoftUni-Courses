function touristShop(input) {

    let budget = Number(input.shift());
    let product = input.shift();
    let totalPrice = 0;
    let productsNum = 0;

    while (product !== "Stop") {

        productsNum++;
        let price = Number(input.shift());
        if (productsNum % 3 === 0) {
            price *= 0.5;
        }
        totalPrice += price;
        if (totalPrice > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
            return;
        }

        product = input.shift();
    }
    console.log(`You bought ${productsNum} products for ${totalPrice.toFixed(2)} leva.`);
}
touristShop(["54","Thermal underwear","24","Sunscreen","45"]);
//(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"]);