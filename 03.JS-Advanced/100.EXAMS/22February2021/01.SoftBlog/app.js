function solve() {
   let creator = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createBtn = document.getElementsByClassName('btn create')[0];
   createBtn.addEventListener('click', creatingPost);
   let postSection = document.querySelector('.site-content main section');
   let archiveSection = document.querySelector('.archive-section ol');

   function creatingPost(e) {
      e.preventDefault()

      if (!title.value, !category.value, !content.value, !creator.value) {
         return;
      };

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = title.value;

      let pCategory = document.createElement("p");
      pCategory.textContent = "Category:";
      let strongCategory = document.createElement('strong');
      strongCategory.textContent = category.value;
      pCategory.appendChild(strongCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';
      let strongCreator = document.createElement('strong');
      strongCreator.textContent = creator.value;
      pCreator.appendChild(strongCreator);

      let pContent = document.createElement('p');
      pContent.textContent = content.value;

      let divBtn = document.createElement('div');
      divBtn.setAttribute("class", "buttons");
      let delBtn = document.createElement('button');
      delBtn.setAttribute("class", "btn delete");
      delBtn.textContent = 'Delete';
      let archBtn = document.createElement('button');
      archBtn.setAttribute("class", "btn archive");
      archBtn.textContent = 'Archive';
      divBtn.appendChild(delBtn);
      divBtn.appendChild(archBtn);

      [h1, pCategory, pCreator, pContent, divBtn].forEach(element => article.appendChild(element));
      postSection.appendChild(article);

      archBtn.addEventListener("click", archiving);
      delBtn.addEventListener("click", deleting);
      [title, category, content, creator].forEach(x => x.value = "");
   };
   function archiving(e) {
      let allSection = e.target.parentElement.parentElement;
      let archiveToSort = document.querySelector('.archive-section ol');
      let title = allSection.firstChild.textContent;

      let li = document.createElement('li');
      li.textContent = title;
      archiveSection.appendChild(li);

      let sorted = Array.from(archiveToSort.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
      for(let current of sorted){
         archiveSection.appendChild(current);
      };
      allSection.remove();
   };
   function deleting(e) {
      e.target.parentElement.parentElement.remove();
   };
};

// '<h2>Archive</h2><ol><li>MyArticle</li><li>Arrays</li></ol>' to equal
// '<h2>Archive</h2><ol><li>Arrays</li><li>MyArticle</li></ol>'