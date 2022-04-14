import { deletePost, getPostById , donate ,getDonationsByPostId , getMyDonationByPostId} from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (post, isOwner, onDelete , onDonation,donations, hasDonation) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donations}</p>

                <div class="btns">
                    ${isOwner 
                    ? html` <div class="actionBtn">
                        <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                         </div>`
                    : null}

                    ${getUserData() && !isOwner && !hasDonation
                      ? html`<a @click=${onDonation} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                      : null} 
                    
                </div>

            </div>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    // const post = await getPostById(ctx.params.id);
    const userData = getUserData();

    const [post, donations, hasDonation] = await Promise.all([
        getPostById(ctx.params.id),
        getDonationsByPostId(ctx.params.id),
        userData ? getMyDonationByPostId(ctx.params.id, userData.id) : 0    
    ]);

    
    const isOwner = userData && userData.id == post._ownerId;


    ctx.render(detailsTemplate(post, isOwner, onDelete, onDonation ,donations, hasDonation));

    async function onDelete() {
        const choice = confirm(`Are You Sure You Want To Delete "${post.name}" ?`);
        if (choice) {
            await deletePost(ctx.params.id);
            ctx.page.redirect('/');
        };
    };
    async function onDonation(){
        await donate(ctx.params.id);
        ctx.page.redirect(`/details/` + ctx.params.id);
    };
};