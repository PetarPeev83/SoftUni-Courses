(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        if (typeof n != 'number' || n < 0 || n > this.length) {
            throw new Error;
        }
        let newArr = this.slice(0);
        return newArr.slice(n);
    };
    Array.prototype.take = function (n) {
        if (typeof n != 'number' || n < 0 || n > this.length) {
            throw new Error;
        }
        let newArr = this.slice(0);
        return newArr.splice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();


// function solve() {
//     let myArr = [1, 2, 3, 4, 5]

//     Array.prototype.last = function () {
//         return this[this.length - 1];
//     };
//     Array.prototype.skip = function (n) {
//         if (typeof n != 'number' || n < 0 || n > this.length) {
//             throw new TypeError;
//         }
//         let newArr = this.slice(0);
//         return newArr.slice(n);
//     };
//     Array.prototype.take = function (n) {
//         if (typeof n != 'number' || n < 0 || n > this.length) {
//             throw new TypeError;
//         }
//         let newArr = this.slice(0);
//         return newArr.splice(0, n);
//     };
//     Array.prototype.sum = function () {
//         return this.reduce((a, b) => a + b);
//     };
//     Array.prototype.average = function () {
//         return this.sum() / this.length;
//     };
//     console.log(myArr.average());
//     console.log(myArr);
// };
// solve()