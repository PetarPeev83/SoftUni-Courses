import { getTopicById  , getCommentsByTopicId, createComment} from '../api/data.js';
import { spinner } from '../common/spinner.js';
import { html, until } from '../lib.js';
import {createSubmitHandler, getUserData } from '../util.js';

const detailsTemplate = (topicPromise) => html`
<div class="topic">
    ${until(topicPromise, spinner())}
</div>`;

const topicCard = (topic , isOwner , comments , onCommentSubmit) => html`
<header>
    <h2>${topic.title}</h2>
    ${isOwner ? html`<a class="action btn" href=${`/edit/${topic._id}`}>Edit</a><a class="action btn" href="javascript:void(0)">Delete</a>` 
    : html`<span>By ${topic.author.username}</span>`}
</header>
<div class='topic-content'><p>${topic.content}</p></div>
<div class="main">
    ${commentForm(onCommentSubmit)}
    ${comments.map(commentCard)}
</div>`;

const commentCard = (comment) => html`
<article class="preview">
    <header>Comment by ${comment.author.username}</header>
    <p>${comment.content}</p>
</article>`;

const commentForm = (onCommentSubmit) => html`
<article class="comment">
<h3>Post New Comment</h3>
<form @submit=${onCommentSubmit}>
  <label><textarea type="text" name="content"></textarea></label>
  <input class="action" type="submit" value="Post">
</form>
</article>`;

export function detailsPage(ctx) {

    update();

    function update(){
        ctx.render(detailsTemplate(loadTopic(ctx.params.id , onCommentSubmit)));
    };

   async function onCommentSubmit(data){
        
         if (data.content == ""){
         return alert('Cannot post empty comment!')
        };
        data.topicId = ctx.params.id;
        await createComment(data);
        update();
    };
};

async function loadTopic(id ,onCommentSubmit) {
const [topic , comments] = await Promise.all([
    getTopicById(id),
    getCommentsByTopicId(id)
]);

    const userData = getUserData();
    const isOwner = userData && userData.id == topic._ownerId;

    return topicCard(topic , isOwner , comments ,createSubmitHandler(onCommentSubmit , 'content'));
};