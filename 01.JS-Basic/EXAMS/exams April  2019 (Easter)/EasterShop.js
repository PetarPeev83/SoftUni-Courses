function easterShop(input) {

    let eggsInShop = Number(input[0]);
    let eggsSolded = 0;
    let i = 1;

    while (input[i] !== "Close") {

        let comand = input[i];
        i++;
        let eggsNum = Number(input[i]);

        switch (comand) {
            case "Buy":
                if (eggsNum > eggsInShop) {
                    console.log("Not enough eggs in store!");
                    console.log(`You can buy only ${eggsInShop}.`);
                    return;
                } else {
                    eggsSolded += eggsNum;
                    eggsInShop -= eggsNum; break;
                }
            case "Fill": eggsInShop += eggsNum; break;
        }
        i++;
    }
    console.log("Store is closed!");
    console.log(`${eggsSolded} eggs sold.`);
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"])

//(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"])