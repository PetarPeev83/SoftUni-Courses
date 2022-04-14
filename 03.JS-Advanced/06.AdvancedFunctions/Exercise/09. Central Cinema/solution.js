function solve() {

    let [nameMovie, hall, priceTicket] = document.querySelectorAll('#container input');
    let buttonOnScreen = document.querySelector('#container button');
    buttonOnScreen.addEventListener('click', addToList);
    let movieSection = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');
    let clearArchiveBtn = document.querySelector('#archive button');
    clearArchiveBtn.addEventListener('click', (e) => archiveSection.innerHTML = '');   //e.target.parentElement.children[1].innerHTML = ''
    // clearArchiveBtn.addEventListener('click', clearArchive);

    function addToList(e) {
        e.preventDefault();
        if (nameMovie.value != "" && hall.value != "" && priceTicket.value != "" && !isNaN(Number(priceTicket.value))) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = nameMovie.value;
            li.appendChild(span);
            let strong1 = document.createElement('strong');
            strong1.textContent = `Hall: ${hall.value}`;
            li.appendChild(strong1);

            let div = document.createElement('div');
            let strong2 = document.createElement('strong');
            strong2.textContent = Number(priceTicket.value).toFixed(2);
            div.appendChild(strong2);
            let input = document.createElement('input');
            input.setAttribute('placeholder', "Tickets Sold")
            div.appendChild(input);
            let button = document.createElement('button');
            button.textContent = 'Archive';
            div.appendChild(button);
            button.addEventListener('click', archiving);

            li.appendChild(div);
            movieSection.appendChild(li);

            nameMovie.value = '';
            hall.value = '';
            priceTicket.value = '';
        }
    }
    function archiving(e) {
        let ticketsSold = Number(e.target.parentElement.children[1].value);
        let ticketPrice = Number(e.target.parentElement.children[0].textContent);

        if (!isNaN(ticketsSold) && ticketsSold != "") {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = e.target.parentElement.parentElement.children[0].textContent;
            li.appendChild(span);

            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${(ticketsSold * ticketPrice).toFixed(2)}`;
            li.appendChild(strong);

            let button = document.createElement('button');
            button.textContent = 'Delete';
            li.appendChild(button);
            button.addEventListener('click', (e) => e.target.parentElement.parentElement.removeChild(e.target.parentElement));

            archiveSection.appendChild(li);
        }
        e.target.parentElement.parentElement.remove();
    }
    // function clearArchive(e) {
    //     let archive = e.target.parentElement.children[1];
    //     while (archive.firstChild) {
    //         archive.removeChild(archive.lastChild);
    //     }
    // }
}