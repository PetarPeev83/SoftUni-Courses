function create(words) {

   // let content = document.getElementById('content');

   // for (let word of words) {
   //    let div = document.createElement('div');
   //    let para = document.createElement('p');
   //    para.textContent = word;

   //    para.style.display = 'none';

   //    div.appendChild(para);
   //    div.addEventListener('click', reveal);

   //    content.appendChild(div);
   // }
   // function reveal(e) {
   //    // e.target.children[0].style = "";
   //    e.currentTarget.children[0].style = "";
   // }



   //ЗА ДА НЕ СЛАГАМЕ EVENTLISTENER НА ВСИЧКИ ЕЛЕМЕНТИ ПОЛЗВАМЕ ВТОРИЯТ НАЧИН С ЕДИН LISTENER САМО НА РОДИТЕЛЯ delegirame, 
   //ОБАЧЕ ТРЯБВА ПРОВЕРКА ЗА ДА СМЕ СИГУРНИ ЧЕ СМЕ ХВАНАЛИ ТОЧНИЯТ ЕЛЕМЕНТ !!!!!!!

   let content = document.getElementById('content');
   content.addEventListener('click', reveal);

   for (let word of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;

      para.style.display = 'none';

      div.appendChild(para);

      content.appendChild(div);
   }
   function reveal(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {
         e.target.children[0].style = "";
      }
   }
}