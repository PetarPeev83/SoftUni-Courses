window.addEventListener('load', solve);

function solve() {
    const name = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    const mailList = document.getElementById('list');
    const sentMailsList = document.querySelector('.sent-list');
    const deletedMailsList = document.querySelector('.delete-list');

    document.getElementById('add').addEventListener('click', addToList);

    document.getElementById('reset').addEventListener('click', (e) => {
        e.preventDefault();
        name.value = "";
        title.value = "";
        message.value = "";
    });

    function addToList(ev) {
        ev.preventDefault();

        if (name.value != "" || title.value != "" || message.value != "") {
            // console.log('empty');

            let li = document.createElement('li');
            li.innerHTML = `<h4>Title: ${title.value}</h4><h4>Recipient Name: ${name.value}</h4><span>${message.value}</span>`;

            let div = document.createElement('div');
            div.id = 'list-action';
            let sendBtn = document.createElement('button');
            sendBtn.type = 'submit';
            sendBtn.id = 'send';
            sendBtn.textContent = 'Send';

            let delBtn = document.createElement('button');
            delBtn.type = 'submit';
            delBtn.id = 'delete';
            delBtn.textContent = 'Delete';

            div.appendChild(sendBtn);
            div.appendChild(delBtn);
            li.appendChild(div);

            mailList.appendChild(li);

            sendBtn.addEventListener('click', sending);
            delBtn.addEventListener('click', deleting);

            name.value = "";
            title.value = "";
            message.value = "";
        };

        function sending(event) {
            event.preventDefault();
            let parent = event.target.parentElement.parentElement;
            parent.remove();
            let title = parent.children[0].textContent;
            let to = parent.children[1].textContent.slice(16);

            const li = document.createElement('li');
            li.innerHTML = `<span>To: ${to}</span><span>${title}</span>`;

            let div = document.createElement('div');
            div.className = "btn";
            let button = document.createElement('button');
            button.type = 'submit';
            button.className = 'delete';
            button.textContent = 'Delete';
            div.appendChild(button);
            li.appendChild(div);
            sentMailsList.appendChild(li);

            button.addEventListener('click', onDel);
        };
        function deleting(event) {
            event.preventDefault();
            event.target.parentElement.parentElement.remove();
        };
        function onDel(event) {
            event.preventDefault();

            let parent = event.target.parentElement.parentElement;
            parent.remove();
            // console.log(parent);
            let li = document.createElement('li');
            li.innerHTML = `<span>${parent.children[0].textContent}</span><span>${parent.children[1].textContent}</span>`;
            deletedMailsList.appendChild(li);
        };
    };
};