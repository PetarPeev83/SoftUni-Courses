window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');
    let totalPrice = document.getElementsByClassName('total-price');

    document.getElementById('add').addEventListener("click", moveToTable);
    let furnitureList = document.getElementById('furniture-list');

    function moveToTable(e) {
        e.preventDefault();

        if (model.value.length == 0 || description.value.length == 0 || Number(year.value) <= 0 || Number(price.value) <= 0 || isNaN(Number(year.value)) || isNaN(Number(price.value))) {
            return;
        }
        let tr = document.createElement('tr');
        tr.setAttribute('class', 'info');
        let td1 = document.createElement('td');
        td1.textContent = model.value;
        tr.appendChild(td1);
        td2 = document.createElement('td');
        td2.textContent = Number(price.value).toFixed(2);
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        let btn1 = document.createElement('button');
        btn1.setAttribute('class', 'moreBtn');
        btn1.textContent = 'More Info';
        td3.appendChild(btn1);
        btn1.addEventListener('click', () => {
            if (btn1.textContent == 'More Info') {
                tr2.setAttribute('style', 'display: contents;');
                btn1.textContent = 'Less Info';
            } else {
                btn1.textContent = 'More Info';
                tr2.style.display = 'none';
            }
        });
        let btn2 = document.createElement('button');
        btn2.setAttribute('class', 'buyBtn');
        btn2.textContent = 'Buy it';
        td3.appendChild(btn2);
        btn2.addEventListener('click', buy);
        tr.appendChild(td3);
        furnitureList.appendChild(tr);

        let tr2 = document.createElement('tr');
        tr2.setAttribute('class', 'hide');
        tr2.style.display = 'none';
        let td4 = document.createElement('td');
        td4.textContent = `Year: ${year.value}`;
        tr2.appendChild(td4);
        let td5 = document.createElement('td');
        td5.setAttribute('colspan', '3');
        td5.textContent = `Description: ${description.value}`;
        tr2.appendChild(td5);
        furnitureList.appendChild(tr2);

        [model, year, description, price].forEach(x => x.value = "");
    };
    function buy(e) {
        e.target.parentElement.parentElement.remove();
        totalPrice[0].textContent = (Number(totalPrice[0].textContent) + Number(e.target.parentElement.parentElement.children[1].textContent)).toFixed(2);
    };
};


// Unexpected error: expected 
// '<trclass="info"><td>Chair</td><td>48.00</td>
// <td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td>
// </tr><trclass="hide"style="display:contents">
// <td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>'
//  to equal 
// '<trclass="info"><td>Chair</td><td>48.00</td>
// <td><buttonclass="moreBtn">LessInfo</button><buttonclass="buyBtn">Buyit</button></td>
// </tr><trclass="hide"style="display:contents;">
// <td>Year:2016</td><tdcolspan="3">Description:Comfortableforyouandyourpet!</td></tr>'