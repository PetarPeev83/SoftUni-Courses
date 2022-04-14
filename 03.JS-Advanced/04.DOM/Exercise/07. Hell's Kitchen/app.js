function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let input = document.getElementById('inputs').children[1].value.slice(1, -1).split('"');
      let filtredInput = input.filter((x, i) => i % 2 !== 0);

      let bestRestaurant = document.getElementById('bestRestaurant').lastElementChild;
      let bestWorkers = document.getElementById('workers').lastElementChild;

      console.log(filtredInput);

      let restorants = {};

      for (let current of filtredInput) {
         let workersObj = {};
         [restorant, workers] = current.split(' - ');
         workers = workers.split(', ')
         // for (let currentWorker of workers) {
         //    [workerName, workerSalary] = currentWorker.split(' ');
         //    workersObj[workerName] = workerSalary;
         // };

         restorants[restorant] = workers.split(', ');
         console.log(workers);
      }
      console.log(restorants['PizzaHut']);
   }
}