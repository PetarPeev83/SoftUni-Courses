function search() {

   let townsList = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText');

   let matches = 0;

   for (let town of townsList) {
      let currentTown = town.textContent;
      if (currentTown.includes(input.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }
   // console.log(townsList);
   document.getElementById('result').innerHTML = `${matches} matches found`;
}
