function sortingNumbers(input) {

    let sorted = [];
    input.sort((a, b) => a - b);
    while (input.length > 0) {
      let smallest = input.shift();
      let biggest = input.pop();
      sorted.push(smallest)
      sorted.push(biggest)
    }
    // console.log(sorted);
    return sorted;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);