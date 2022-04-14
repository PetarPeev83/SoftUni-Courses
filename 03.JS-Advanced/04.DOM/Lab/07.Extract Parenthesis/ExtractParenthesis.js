function extract(content) {
    let text = document.getElementById('content').textContent;

    let pattern = /\((.+?)\)/g;
    let match = text.match(pattern);
    return match.join('; ');
    // console.log(match.join('; '));
}