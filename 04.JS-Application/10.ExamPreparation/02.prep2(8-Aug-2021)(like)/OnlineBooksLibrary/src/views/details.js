import { deleteBook, getBookById, getLikesByBookId, getMyLikeByBookId, likeBook } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (book, isOwner, onDelete, likes, hasLike, isGuest,onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->

            ${isOwner ? html`
            <a class="button" href="/edit/${book._id}">Edit</a>
            <a class="button" @click=${onDelete} href="javascript:void(0)">Delete</a>`
            : null}

            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->

            ${isOwner || isGuest || hasLike ? null 
                : html`<a class="button" @click=${onLike} href="javascript:void(0)">Like</a>`}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export async function detailsPage(ctx) {

    // const book = await getBookById(ctx.params.id);      // вкарвам го в promise.all за да го пусна със заявките за лайковете!!!;
    const userData = getUserData();

    const [book, likes, hasLike] = await Promise.all([
        getBookById(ctx.params.id),
        getLikesByBookId(ctx.params.id),
        userData ? getMyLikeByBookId(ctx.params.id, userData.id) : 0    // с тернарен оператор ако няма userData да върне 0;
    ]);

    const isOwner = userData && userData.id == book._ownerId;
    const  isGuest = userData == null;

    ctx.render(detailsTemplate(book, isOwner, onDelete, likes, hasLike,isGuest,onLike));

    async function onDelete() {
        const choice = confirm(`Are You Sure You Want To Delete "${book.title}" ?`);
        if (choice) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/');
        };
    };

    async function onLike(){
        await likeBook(ctx.params.id);
        ctx.page.redirect(`/details/` + ctx.params.id);
    };
};