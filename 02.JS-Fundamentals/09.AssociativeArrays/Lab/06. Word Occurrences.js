function wordOccurrences(input) {

    let map = new Map();

    for (let word of input) {
        if (map.has(word)) {
            let newCount = map.get(word) + 1;
            map.set(word, newCount);
        } else {
            map.set(word, 1);
        }
    }
    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    for (let current of sorted) {
        console.log(`${current[0]} -> ${current[1]} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And", "finally",
    "the", "third", "sentence"]);