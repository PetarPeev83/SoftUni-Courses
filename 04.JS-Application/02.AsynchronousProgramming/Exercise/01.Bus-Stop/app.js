
// async function getInfo() {    // 
//     const stopId = document.getElementById('stopId').value;
//     const stopName = document.getElementById('stopName');
//     const timeTable = document.getElementById('buses');

//     let url = (`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

//     try {
//         timeTable.innerHTML = "";  // izchistvame predishnoto value
//         stopName.textContent = "Loading..."  // optional
//         const res = await fetch(url);

//         if (res.status != 200) {
//             throw new Error();
//         };

//         const data = await res.json();

//         stopName.textContent = data.name;

//         Object.entries(data.buses).forEach(bus => {
//             const li = document.createElement('li');
//             li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
//             timeTable.appendChild(li);
//         });
//     } catch (error) {
//         stopName.textContent = "Error";
//     };
// };

function getInfo() {    // 
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const timeTable = document.getElementById('buses');

    let url = (`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);

    timeTable.innerHTML = "";  // izchistvame predishnoto value
    stopName.textContent = "Loading..."  // optional

    fetch(url)
        .then(res => {
            if (res.status != 200) {
                throw new Error();
            };
            return res.json();
        })
        .then(data => {
            stopName.textContent = data.name;

            Object.entries(data.buses).forEach(bus => {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                timeTable.appendChild(li);
            });
        })
        .catch(error => {
            stopName.textContent = "Error";
        });
};