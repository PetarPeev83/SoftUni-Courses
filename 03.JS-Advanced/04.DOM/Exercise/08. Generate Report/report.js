function generateReport() {
    let input = document.querySelectorAll('input');
    let checkedIndexes = [];
    let rows = document.querySelectorAll('tbody tr');
    let result = [];
    let properties = document.querySelectorAll('body thead th');
    let output = document.getElementById('output');

    // console.log(properties[0].textContent);

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if (element.checked === true) {
            checkedIndexes.push(i)
        }
        // console.log(element.checked);
    }
    if (checkedIndexes.length == 0) {
        output.value = 'Nothing selected !!!';
    } else {
        for (let p = 0; p < rows.length; p++) {
            let current = rows[p];
            let obj = {};

            for (let q = 0; q < checkedIndexes.length; q++) {
                let currentIndex = checkedIndexes[q];
                let currentProp = properties[currentIndex].textContent;
                obj[currentProp] = current.children[currentIndex].textContent;
                // console.log(current.children[currentIndex].textContent);
            }
            result.push(obj)
        }
        // console.log(JSON.stringify(result));
        output.value = JSON.stringify(result);
        // result.forEach(x => console.log(JSON.stringify(x)));
    }
}

