function furniture(input) {
    let pattern = /^>>(?<product>(.+))<<(?<price>[0-9]+(?:\.[0-9]+)?)!(?<qntity>\d+)\b/;       
    let furnitureList = [];
    let totalSpend = 0;
    let item = input.shift();
    while (item !== 'Purchase') {
        if (pattern.test(item)) {
            let match = pattern.exec(item);
            furnitureList.push(match.groups.product);
            totalSpend += Number(match.groups.price) * Number(match.groups.qntity);
        }
        item = input.shift();
    }
    console.log('Bought furniture:');
    if (furnitureList.length > 0) {
        furnitureList.forEach(element => console.log(element));
        console.log(`Total money spend: ${totalSpend.toFixed(2)}`);
    } else {
        console.log("Total money spend: 0.00");
    }
}
furniture([">>Sofa<<312.23!3",
    ">Invalid<<!5",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]);