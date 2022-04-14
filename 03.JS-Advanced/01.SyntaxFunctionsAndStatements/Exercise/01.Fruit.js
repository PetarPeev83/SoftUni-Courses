function fruit(type, weightGrams, priceKg) {

    console.log(`I need $${((weightGrams / 1000) * priceKg).toFixed(2)} to buy ${(weightGrams/1000).toFixed(2)} kilograms ${type}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);