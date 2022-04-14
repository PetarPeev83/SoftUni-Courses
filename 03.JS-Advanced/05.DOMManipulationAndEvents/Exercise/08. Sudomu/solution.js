function solve() {
    document.querySelector('tfoot td[colspan="3"]').addEventListener('click', onclick);
    let result = document.getElementById('check').children[0];
    let table = document.getElementsByTagName('table')[0];
    let cols = document.querySelectorAll('tbody tr');
    let rows = document.querySelectorAll('tbody tr td');
    function onclick(e) {
        if (e.target.textContent == 'Quick Check') {
            let complited = true;
            for (let col of cols) {
                let numsInCol = Array.from(col.children).map(x => x.firstElementChild.value);
                numsInCol = Array.from(new Set(numsInCol));
                if (numsInCol.length < 3) {
                    result.textContent = "NOP! You are not done yet...";
                    table.style.border = "2px solid red";
                    result.style.color = 'red';
                    complited = false;
                }
            }
            for (let i = 0; i < 3; i++) {
                let first = rows[i].firstElementChild.value;
                let second = rows[i + 3].firstElementChild.value;
                let third = rows[i + 6].firstElementChild.value;
                let numsInRow = [first, second, third];
                numsInRow = Array.from(new Set(numsInRow));
                if (numsInRow.length < 3) {
                    result.textContent = "NOP! You are not done yet...";
                    table.style.border = "2px solid red";
                    result.style.color = 'red';
                    complited = false;
                }
            }
            if (complited) {
                result.textContent = "You solve it! Congratulations!";
                table.style.border = "2px solid green";
                result.style.color = 'green';
                // console.log(result);
            }
        } else if (e.target.textContent == 'Clear') {
            table.style.border = "none";
            result.textContent = "";
            for (let col of cols) {
                Array.from(col.children).map(x => x.firstElementChild.value = "");
                // console.log(numsInCol);
            }
        }
    }
}