function solve() {

    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stop = {
        next: "depot"
    };

    async function depart() {

        departBtn.disabled = true;
        const url = (`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`);

        const res = await fetch(url);
        const data = await (res.json());

        label.textContent = `Next stop ${data.name}`;

        stop = data;


        arriveBtn.disabled = false;
    };

    async function arrive() {

        arriveBtn.disabled = true;

        label.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;

    };

    return {
        depart,
        arrive
    };
};

let result = solve();