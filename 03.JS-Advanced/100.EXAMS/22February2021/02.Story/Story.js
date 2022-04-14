class Story {
    #comments;                        // PRIVATE property !!!
    #likes;                           // PRIVATE property !!!
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
        this.idCounter = 0;
    }
    get likes() {
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        if (this.#likes.length == 1) {
            return `${this.#likes[0]} likes this story!`
        };
        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    };
    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        };
        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        };
        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    };
    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        };
        this.#likes = this.#likes.filter(name => name != username); //  VRUSHTA SAMO ELEMENTITE KOITO OTGOVARIAT NA USLOVIETO !!!
        return `${username} disliked ${this.title}`;
    };
    comment(username, content, id) {
        if (id == undefined || id > this.idCounter || id <= 0) {
            this.idCounter++;
            this.#comments.push({
                Id: this.idCounter,
                Username: username,
                Content: content,
                Replies: [],
            });
            return `${username} commented on ${this.title}`;
        } else {
            this.#comments[id - 1].Replies.push({
                Id: Number(`${id}.${this.#comments[id - 1].Replies.length + 1}`),
                Username: username,
                Content: content,
            });
            return "You replied successfully";
        }
    };
    toString(sortingType) {
        let result = [];
        [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this.#likes.length}`, "Comments:"].forEach(x => result.push(x));

        if (this.#comments.length == 0) {
            return result.join('\n');
        };
        
        if (sortingType == 'asc') {
            let ascSorted = this.#comments.sort((a, b) => a.Id - b.Id);
            for (let comment of ascSorted) {
                result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
                if (comment.Replies.length > 0) {
                    let ascSortedReplies = comment.Replies.sort((a, b) => a.Id - b.Id)
                    ascSortedReplies.forEach(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`));
                };
            };
        } else if (sortingType == 'desc') {
            let descSorted = this.#comments.sort((a, b) => b.Id - a.Id);
            for (let comment of descSorted) {
                result.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
                if (comment.Replies.length > 0) {
                    let descSortedReplies = comment.Replies.sort((a, b) => b.Id - a.Id)
                    descSortedReplies.forEach(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`));
                };
            };
        } else if (sortingType == 'username') {
            let sortedByName = this.#comments.sort((a, b) => a.Username.localeCompare(b.Username));
            for (let current of sortedByName) {
                result.push(`-- ${current.Id}. ${current.Username}: ${current.Content}`);
                if (current.Replies.length > 0) {
                    let sortedReplies = current.Replies.sort((c, d) => c.Username.localeCompare(d.Username));
                    sortedReplies.forEach(reply => result.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`));
                };
            };
        };
        return result.join('\n');
    };
};

let art = new Story("My Story", "Anny");

art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
console.log(art.toString('asc'));

/*
John likes this story!
My Story has 0 likes
Ammy commented on My Story
You replied successfully

Title: My Story
Creator: Anny
Likes: 0
Comments:
-- 2. Ammy: New Content
-- 3. Jessy: Nice :)
-- 1. Sammy: Some Content

*/