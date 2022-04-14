function oldBooks(input) {

    let book = String(input[0]);
    let checkedBook = String(input[1])
    let index = 2;
    let bookNum = 0;

    while (book !== checkedBook && checkedBook !== "No More Books") {
        checkedBook = input[index];
        bookNum++
        index++
    }
    if (checkedBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${bookNum} books.`)
    } else {
        console.log(`You checked ${bookNum} books and found it.`)
    }

}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])


