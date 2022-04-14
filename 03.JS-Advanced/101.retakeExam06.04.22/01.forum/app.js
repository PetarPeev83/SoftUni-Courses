window.addEventListener("load", solve);

function solve() {
  const title = document.getElementById('post-title');
  const category = document.getElementById('post-category');
  const content = document.getElementById('post-content');
  document.getElementById('publish-btn').addEventListener('click', addToReview);

  let reviewSection = document.getElementById('review-list');
  let uploadedSection = document.getElementById('published-list');


  function addToReview(event) {
    if (title.value == "" || category.value == "" || content.value == "") {
      return;
    };

    let li = document.createElement('li');
    li.className = 'rpost';
    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = title.value;
    article.appendChild(h4);
    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${category.value}`;
    article.appendChild(categoryP);
    let contentP = document.createElement('p');
    contentP.textContent = `Content: ${content.value}`;
    article.appendChild(contentP);

    li.appendChild(article);

    let approveBtn = document.createElement('button');
    approveBtn.className = 'action-btn approve';
    approveBtn.textContent = 'Approve';
    li.appendChild(approveBtn);

    let editBtn = document.createElement('button');
    editBtn.className = 'action-btn edit';
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn);

    editBtn.addEventListener('click', (e) => {
      let fields = Array.from(e.target.parentElement.children[0].children);

      title.value = fields[0].textContent;
      category.value = fields[1].textContent.slice(10);
      content.value = fields[2].textContent.slice(9);

      li.remove();
      // console.log(fields);
    });
    approveBtn.addEventListener('click', (e) => {
      uploadedSection.appendChild(li);
      editBtn.remove();
      approveBtn.remove();

      document.getElementById('clear-btn').addEventListener('click', () => {
        uploadedSection.innerHTML = "";
      });
    });

    reviewSection.appendChild(li);

    title.value = "";
    category.value = "";
    content.value = "";
  };
};
