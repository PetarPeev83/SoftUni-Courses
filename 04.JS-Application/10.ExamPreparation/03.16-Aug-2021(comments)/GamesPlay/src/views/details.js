import { createComment, deleteGame, getCommentsByBookId, getGameById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (game, isOwner, onDelete, comments, isGuest,onComment) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>
        
        <p class="text">${game.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->

        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                ${comments.length == 0 
                ? html`<p class="no-comment">No comments.</p>`
                : html`${comments.map(commentCard)}`
            }
            </ul>
        </div>

        ${isOwner ? html`
        <div class="buttons">
            <a class="button" href="/edit/${game._id}">Edit</a>
            <a class="button" @click=${onDelete} href="javascript:void(0)">Delete</a>
        </div>`
     : null}

    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->

    ${isOwner || isGuest   ? null
    :html`<article class="create-comment">
        <label>Add new comment:
        </label>
        <form @submit=${onComment} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`}

</section>`;

const commentCard = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>`;

export async function detailsPage(ctx) {

    // const game = await getGameById(ctx.params.id);      // вкарвам го в promise.all за да го пусна със заявките за коментарите!!!;
    const userData = getUserData();

    const [game, comments] = await Promise.all([
        getGameById(ctx.params.id),
        getCommentsByBookId(ctx.params.id),
    ]);

    const isOwner = userData && userData.id == game._ownerId;
    const isGuest = userData == null;

    ctx.render(detailsTemplate(game, isOwner, onDelete, comments, isGuest,onComment));

    async function onDelete() {
        const choice = confirm(`Are You Sure You Want To Delete "${game.title}" ?`);
        if (choice) {
            await deleteGame(ctx.params.id);
            ctx.page.redirect('/');
        };
    };

    async function onComment(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const comment = formData.get('comment').trim(); 
        // console.log(event.target);
        event.target[0].value = "";

        await createComment(ctx.params.id , comment);
        ctx.page.redirect(`/details/` + ctx.params.id);
    };
};