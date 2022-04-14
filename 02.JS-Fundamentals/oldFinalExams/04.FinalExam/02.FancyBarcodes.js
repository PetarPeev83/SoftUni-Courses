function barcodes(input) {
    let barcodesCount = Number(input.shift());
    let regexValidation = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;
    let regexNums = /[0-9]/g;
    for (let i = 0; i < barcodesCount; i++) {
        let group = "";
        let match = input[i].match(regexValidation);
        if (match === null) {
            console.log("Invalid barcode");
        } else {
            let numsMatch = input[i].match(regexNums);
            if (numsMatch === null) {
                group = "00"
            } else {
                group = numsMatch.join("");
            }
            console.log(`Product group: ${group}`);
        }
    }
}
// barcodes(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);

barcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
