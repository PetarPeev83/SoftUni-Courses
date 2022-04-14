function evenPosition(input){
    let toPrint = [];
    for(let i = 0 ; i < input.length ; i+=2){
        toPrint.push(input[i]);
    }
    console.log(toPrint.join(' '));
}
evenPosition(['20', '30', '40', '50', '60']);