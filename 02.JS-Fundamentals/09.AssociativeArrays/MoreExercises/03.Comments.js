function comments(input) {
    let userList = [];
    let articleList = [];
    let commentsObj = {};
    for (let current of input) {
        if (current.startsWith("user ")) {
            [x, user] = current.split(" ");
            userList.push(user);
        } else if (current.startsWith("article ")) {
            let article = current.split(" ").slice(1, current.length).join(' ');
            articleList.push(article);
        } else if (current.includes(" posts on ")) {
            let splitted = current.split(": ");
            [userName, articleName] = splitted[0].split(" posts on ");
            let comment = splitted[1].split(", ").join(" - ");
            if (userList.includes(userName) && articleList.includes(articleName)) {
                if (!commentsObj.hasOwnProperty(articleName)) {
                    commentsObj[articleName][userName] = comment;
                } else {
                    commentsObj[articleName][userName] = comment;
                }
            }
        }
    }
    let sortedArticles = Object.entries(commentsObj).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);
    for (let current of sortedArticles) {
        console.log(`Comments on ${current[0]}`);
        let toPrint = [];
        Object.entries(current[1]).forEach(element => toPrint.push(`--- From user ${element[0]}: ${element[1]}`));
        toPrint.sort((a, b) => a.localeCompare(b)).forEach(element => console.log(element));
    }
}
comments(['user aUser123', 'article someArticle', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4',
    'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much']);