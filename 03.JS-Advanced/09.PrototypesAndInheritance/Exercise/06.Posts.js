function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString = function () {
            return [`Post: ${this.title}`, `Content: ${this.content}`].join("\n");
        }
    };
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }
        addComment = function (comment) {
            this.comments.push(comment);
        }
        toString = function () {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`];
            // result.push(this.toString());
            result.push(`Rating: ${this.likes - this.dislikes}`);
            if (this.comments.length > 0) {
                result.push("Comments:");
                this.comments.forEach(comment => result.push(` * ${comment}`));
            }
            return result.join('\n');
        }
    };
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }
        view = function () {
            this.views++;
            return this; //vrushta obekta
        };
        toString = function () {
            return [`Post: ${this.title}`, `Content: ${this.content}`, `Views: ${this.views}`].join('\n');
        }
    };
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
// console.log(scm.comments);

console.log(scm.toString());

let bp = new classes.BlogPost("TestTitle", "TestContent", 25);
console.log(bp.toString());
bp.view()
bp.view()
bp.view()
console.log(bp.toString());
console.log(bp.view());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
