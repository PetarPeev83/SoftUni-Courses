function addAndRemove(input) {

    let num = 0;
    let toPrint = [];

    for (let i = 0; i < input.length; i++) {

        let act = input[i];
        num++;

        if (act === "add") {
            toPrint.push(num);
        } else {
            toPrint.pop();
        }
    }
    if (toPrint.length <= 0) {
        console.log("Empty");
    } else {
        console.log(toPrint.join(" "));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);