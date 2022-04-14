class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.listOfArticlesNames = [];
        this.guests = [];
        this.guestsNames = [];
    }
    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        };
        if (!this.listOfArticlesNames.includes(articleName)) {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity: Number(quantity),
            });
            this.listOfArticlesNames.push(articleName);
        } else {
            let index = this.listOfArticlesNames.indexOf(articleName);
            this.listOfArticles[index].quantity += Number(quantity);
        };
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };
    inviteGuest(guestName, personality) {
        if (this.guestsNames.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        };
        let points = 0;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        } else {
            points = 50;
        };
        this.guestsNames.push(guestName);
        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0
        });
        return `You have successfully invited ${guestName}!`
    };
    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticlesNames.includes(articleName)) {
            throw new Error("This article is not found.");
        };
        let articleIndex = this.listOfArticlesNames.indexOf(articleName);
        if (this.listOfArticles[articleIndex].articleModel != articleModel) {
            throw new Error("This article is not found.");
        };
        if (this.listOfArticles[articleIndex].quantity == 0) {
            return `The ${articleName} is not available.`;
        };
        if (!this.guestsNames.includes(guestName)) {
            return "This guest is not invited.";
        };
        let guestIndex = this.guestsNames.indexOf(guestName);
        if (this.guests[guestIndex].points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        } else {
            this.guests[guestIndex].points -= this.possibleArticles[articleModel];
            this.listOfArticles[articleIndex].quantity--;
            this.guests[guestIndex].purchaseArticle++;
        };
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    };
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push("Articles information:");
            this.listOfArticles.forEach(article => result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`));
        } else if (criteria == 'guest') {
            result.push("Guests information:");
            this.guests.forEach(guest => result.push(`${guest.guestName} - ${guest.purchaseArticle}`));
        };
        return result.join('\n');
    };
};

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// // Successfully added article Mona Liza with a new quantity - 3.
// //   Successfully added article Ancient vase with a new quantity - 2.
// //   Successfully added article Mona Liza with a new quantity - 1.

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
// // You have successfully invited John!
// //  You have successfully invited Peter!
// // John has already been invited.

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// // John successfully purchased the article worth 200 points.
// //  Peter successfully purchased the article worth 250 points.
// //  This article is not found.

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1
