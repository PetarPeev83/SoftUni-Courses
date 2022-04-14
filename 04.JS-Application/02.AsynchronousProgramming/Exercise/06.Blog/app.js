function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', allPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}
attachEvents();

async function displayPost() {
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    postComments.replaceChildren();
    postTitle.textContent = "Loading...";
    postBody.textContent = "";

    const selectedId = document.getElementById('posts').value;

    /*
    когато викаме две или повече  асинхронни функции трябва да ги опаковаме в "Promisse.all([])" 
    за да не се изчакват една друга а да се изпълнят едновременно !!!!!!!!!!

                const post = await getPostById(selectedId);     
                const comments = await commentsByPostId(selectedId);
                */
               
    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        commentsByPostId(selectedId)
    ]);

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    comments.forEach(comment => {
        let liElement = document.createElement('li');
        liElement.textContent = comment.text;
        liElement.setAttribute("id", comment.id);
        postComments.appendChild(liElement);
    });
    // console.log(comments);
};

async function allPosts() {
    const url = "http://localhost:3030/jsonstore/blog/posts";

    const response = await fetch(url);
    const data = await response.json();

    const selectOption = document.getElementById('posts');
    selectOption.replaceChildren();  //  === selectOption.innerHTML = "";
    Object.values(data).forEach(comment => {
        const optionElement = document.createElement('option');
        optionElement.textContent = comment.title;
        optionElement.value = comment.id;
        selectOption.appendChild(optionElement);
    });
};
async function commentsByPostId(postId) {
    const url = "http://localhost:3030/jsonstore/blog/comments";

    const response = await fetch(url);
    const data = await response.json();

    const comments = Object.values(data).filter(comment => comment.postId == postId);

    return comments;
};
async function getPostById(postId) {
    const url = "http://localhost:3030/jsonstore/blog/posts/" + postId;  //"http://localhost:3030/jsonstore/blog/posts/${postId}";

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
};