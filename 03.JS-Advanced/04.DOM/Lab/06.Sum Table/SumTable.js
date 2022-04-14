function sumTable() {
    // let rows = document.querySelectorAll('table tr td');
    // let totalSum = 0;
    // for (let i = 1; i < rows.length - 1; i += 2) {
    //     totalSum += Number(rows[i].textContent);
    // }
    // // rows[rows.length - 1].textContent = totalSum;
    // document.getElementById('sum').textContent = totalSum;

    const rows = document.querySelectorAll('table tr');

    let totalSum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        totalSum += Number(rows[i].lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = totalSum;
}