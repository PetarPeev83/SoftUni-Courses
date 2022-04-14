function shootOfTheWin(input) {

    let targets = input.shift().split(' ').map(Number);
    for (let index of input) {
        if (index === 'End') {
            break;
        }
        if (targets[Number(index)] !== -1) {
            targets[Number(index)] = -1;
            
        }
    }

}
shootOfTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
// shootOfTheWin(["30 30 12 60 54 66","5","2","4","0","End"]);