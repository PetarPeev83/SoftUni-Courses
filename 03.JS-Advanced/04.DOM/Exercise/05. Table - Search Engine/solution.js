function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let body = Array.from(document.querySelectorAll('table tbody tr'));
      let input = document.getElementById('searchField').value.toLowerCase();
      // body.forEach(element => element.style.background = '#1F2739');
      document.getElementById('searchField').value = '';
      // console.log(input);
      // console.log(body);

      for (let current of body) {

         let currentCheck = current.textContent.toLowerCase();

         // console.log(currentCheck);
         if (currentCheck.includes(input) && input.length > 0) {
            current.classList.add("select");
            // console.log('yes');
         }else {
            current.classList.remove("select");
         }
      }

   }
}