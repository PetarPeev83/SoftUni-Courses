function solve() {
    const text = document.getElementById('text').value;
    const currentCase = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');
    let textArr = text.split(' ');
    let output = '';

    if (currentCase === 'Camel Case') {
        output += textArr[0].toLowerCase();
        for (let i = 1; i < textArr.length; i++) {
            let word = textArr[i];
            let firstLetter = word[0].toUpperCase();
            let rest = word.slice(1, word.length);
            word = firstLetter + rest.toLowerCase();
            output += word;
            result.textContent = output;
        }
    } else if (currentCase === 'Pascal Case') {
        for (let word of textArr) {
            let firstLetter = word[0].toUpperCase();
            let rest = word.slice(1, word.length);
            word = firstLetter + rest.toLowerCase();
            output += word;
        }
        result.textContent = output;
    } else {
        result.textContent = 'Error!';
    }
}