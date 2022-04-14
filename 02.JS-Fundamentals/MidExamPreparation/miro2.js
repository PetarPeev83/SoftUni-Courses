function problem2(input) {
    let biscuits = input.shift().split(', ');
    let i = 0;
    while (input[i] !== "No More Money") {
        [currentCommand, product, index] = input[i].split(" ");
        index = Number(index);
        if (currentCommand === "OutOfStock") {
            for (let current of biscuits) {
                if (current === product) {
                    biscuits[biscuits.indexOf(current)] = "None"
                }
            }
        } else if (currentCommand === "Required") {
            if (index >= 0 && index < biscuits.length && biscuits[index] !== "None") {
                biscuits[index] = product;
            }
        } else if (currentCommand === "Last") {
            biscuits.push(product);
        }
        i++;
    }
    let toPrint = [];
    for (let check of biscuits) {
        if (check !== "None") {
            toPrint.push(check)
        }
    }
    console.log(toPrint.join(" "));
}
problem2(["Vanilla, Chocolate, Raspberry, Chocolate",  "OutOfStock Chocolate",  "Required BBB 3",  "No More Money"]);
// problem2(["Vanilla, Chocolate, Raspberry, Vegan","Required SB 3","OutOfStock Walnuts","No More Money"]);
// problem2(["Raspberry, Raspberry, Ordinary","Last Chocolate","Required Vegan","No More Money"]);