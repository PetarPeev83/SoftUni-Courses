function biggerHalf(input) {
    let sorted = input.sort((a, b) => a - b);
    let half = Math.ceil(input.length / 2);
    // console.log(sorted.slice(-half));
    return sorted.slice(-half);
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);