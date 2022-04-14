function attachEvents() {
    document.getElementById('submit').addEventListener('click', sending);
    document.getElementById('refresh').addEventListener('click', refreshing);
};
attachEvents();

async function sending() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    try {
        if (author.value == "") {
            throw new Error('Fill your name');
        } else if (content.value == "") {
            throw new Error('No content');
        };
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: author.value.trim(),
                content: content.value.trim()
            })
        };
        await fetch(url, options);
        
        document.getElementById('messages').value += '\n' + `${author.value}: ${content.value}`;
        
        author.value = "";
        content.value = "";

    } catch (error) {
        alert(error.message);
    }
};
async function refreshing() {
    const textArea = document.getElementById('messages');

    const response = await fetch("http://localhost:3030/jsonstore/messenger");
    const data = await response.json();

    textArea.value = Object.values(data).map(x => `${x.author}: ${x.content}`).join('\n');

    return data;
};