function wordsUppercase(text) {
    let pattern = /\w+/g;
    let matches = text.match(pattern);
    if (matches != null) {
        let result = matches.join(', ').toUpperCase();
        console.log(result);
    }
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('12 365');