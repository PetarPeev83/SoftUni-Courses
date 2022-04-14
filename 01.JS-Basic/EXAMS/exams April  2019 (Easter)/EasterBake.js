function easterBake(input) {

    let sweetBreadNum = Number(input.shift());

    let sugarPacks = 1;
    let flourPacks = 1;
    let maxSugar = 0;
    let maxFlour = 0;
    let sugarUsed = 0;
    let flourUsed = 0;

    for (let index = 0; index < sweetBreadNum; index++) {

        let sugar = Number(input.shift());
        let flour = Number(input.shift());

        maxSugar = Math.max(maxSugar, sugar);
        maxFlour = Math.max(maxFlour, flour);

        sugarUsed += sugar;
        flourUsed += flour;
    }
    console.log(`Sugar: ${Math.ceil(sugarUsed / 950)}`);
    console.log(`Flour: ${Math.ceil(flourUsed / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"])

//(["4", "500", "350", "560", "430", "600", "345", "578", "543"])