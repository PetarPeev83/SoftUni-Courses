function sortArrayByTwoCriteria(array) {

    let sorted = array.sort((a, b) => a
        .localeCompare(b))
        .sort((a, b) => a.length - b.length);

    console.log(sorted.join("\n"));
}
// sortArrayByTwoCriteria(["alpha", "beta", "gamma"]);
sortArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);