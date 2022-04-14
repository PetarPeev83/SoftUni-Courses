function deleteByEmail() {

    // let input = document.querySelectorAll('input')[0].value;
    // let eMailList = document.querySelectorAll('td');
    // let nothingFound = true;
    // for (let i = 1; i < eMailList.length; i += 2) {
    //     if (input == eMailList[i].textContent) {
    //         eMailList[i].remove();
    //         eMailList[i - 1].remove();
    //         nothingFound = false;
    //     }
    // }
    // if (nothingFound) {
    //     document.getElementById('result').textContent = "Not found.";
    // } else {
    //     document.getElementById('result').textContent = "Deleted."
    // }

    //              ВТОРИ НАЧИН

    // let input = document.querySelector('input[name="email"]');
    // // let rows = [...document.querySelector('tbody').children];
    // let rows = Array.from(document.querySelector('tbody').children);
    // let nothingFound = true;

    // for (let row of rows) {
    //     if (row.children[1].textContent == input.value) {
    //         nothingFound = false;
    //         row.remove();
    //     }
    // }
    // // input.value = "";   //ако искаме да изчистим написаното
    // if (nothingFound) {
    //     document.getElementById('result').textContent = "Not found.";
    // } else {
    //     document.getElementById('result').textContent = "Deleted."
    // }

    //             ТРЕТИ НАЧИН - СЪКРАТЕН (опотимизиран)

    let input = document.querySelector('input[name="email"]');
    let rows = Array.from(document.querySelector('tbody').children)
        .filter(x => x.children[1].textContent == input.value);
    rows.forEach(x => x.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not Found';
}