class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    };
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                payed: false
            });
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        };
    };

    payBook(bookName) {
        for (let current of this.books) {
            if (current.bookName == bookName) {
                if (current.payed == true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    current.payed = true;
                    return `${bookName} has been successfully paid.`;
                };
            }
        };
        throw new Error(`${bookName} is not in the collection.`);
    };

    removeBook(bookName) {
        for (let current of this.books) {
            if (current.bookName == bookName) {
                if (current.payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                } else {
                    const index = this.books.indexOf(current);
                    this.books.splice(index, 1);
                    return `${bookName} remove from the collection.`;
                };
            }
        };
        throw new Error("The book, you're looking for, is not found.");
    };

    getStatistics(bookAuthor) {
        if (bookAuthor) {
            for (let current of this.books) {
                if (current.bookAuthor == bookAuthor) {
                    return `${current.bookName} == ${bookAuthor} - ${current.payed == true ? "Has Paid" : "Not Paid"}.`
                };
            };
            throw new Error(`${bookAuthor} is not in the collection.`);
        } else {
            let output = [`The book collection has ${this.capacity - this.books.length} empty spots left.`,];
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sorted.map(book => output.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed == true ? "Has Paid" : "Not Paid"}.`));
            return output.join('\n');
        };

    };
};


// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// Output 1
// The In Search of Lost Time, with an author Marcel Proust, collect.
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Not enough space in the collection.

// // Input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));
// console.log(library.payBook('In Search of Lost Time'));

// Output 2
// In Search of Lost Time has been successfully paid.
// Don Quixote is not in the collection.

// //Input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// // console.log(library.books);
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Output 3
// Don Quixote remove from the collection.
// In Search of Lost Time need to be paid before removing from the collection.


// // //Input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// Output 4
// The Don Quixote, with an author Miguel de Cervantes, collect.
// Don Quixote == Miguel de Cervantes - Not Paid.

// //Input 5
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

// Output 5
// The book collection has 2 empty spots left.
// Don Quixote == Miguel de Cervantes - Has Paid.
// In Search of Lost Time == Marcel Proust - Not Paid.
// Ulysses == James Joyce - Not Paid.
