function getArticleGenerator(articles) {
    let output = document.getElementById('content');
    return () => {
        if (articles.length > 0) {
            // if (output.children[0] !== undefined) {
            //     output.removeChild(output.children[0])
            // }
            let article = document.createElement('article');
            article.textContent = articles.shift();
            output.appendChild(article);
        }
    }
}
