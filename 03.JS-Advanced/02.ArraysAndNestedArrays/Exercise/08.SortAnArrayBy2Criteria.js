function sortArrayByTwoCriteria(input) {

    input.sort(compare).forEach(x => console.log(x));

    function compare(a, b) {
        return (a.length - b.length) || (a.localeCompare(b));
    }
}
sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
// sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);