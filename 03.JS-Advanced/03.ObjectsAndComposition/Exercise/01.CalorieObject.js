function calorieObject(input) {

    const obj = {};

    for (let i = 1; i < input.length; i += 2) {
        let calories = Number(input[i]);
        let product = input[i - 1];
        obj[product] = calories;
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);