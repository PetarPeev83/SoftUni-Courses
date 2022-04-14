window.addEventListener('load', solve);

function solve() {
    let typeProduct = document.getElementById("type-product");
    let description = document.getElementById("description");
    let clientName = document.getElementById("client-name");
    let clientPhone = document.getElementById("client-phone");
    let button = document.querySelector('#right button');
    button.addEventListener('click', sendOrder);
    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');
    let clearBtn = document.querySelector('#completed-orders button');

    clearBtn.addEventListener('click', function (e) {
        let divElements = Array.from(document.querySelectorAll('#completed-orders div'));
        for (let current of divElements) {
            current.remove();
        }
    });

    function sendOrder(e) {
        e.preventDefault();

        if (description.value == "" || clientName.value == "" || clientPhone == "") {
            return;
        };
        let div = document.createElement('div');
        div.setAttribute('class', 'container');
        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeProduct.value}`;
        div.appendChild(h2);
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
        div.appendChild(h3);
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${description.value}`;
        div.appendChild(h4);
        let startBtn = document.createElement('button');
        startBtn.setAttribute('class', "start-btn");
        startBtn.textContent = 'Start repair';

        div.appendChild(startBtn);
        let finishBtn = document.createElement('button');
        finishBtn.setAttribute('class', "finish-btn");
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = "true";
        div.appendChild(finishBtn);

        receivedOrders.appendChild(div);

        startBtn.addEventListener('click', () => {
            startBtn.disabled = 'true';
            finishBtn.disabled = '';
        });
        finishBtn.addEventListener('click', () => {
            completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        });
        description.value = "";
        clientName.value = "";
        clientPhone.value = "";
    };
};