window.addEventListener('load', solve);

function solve() {
    const name = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');

    document.getElementById('add').addEventListener('click', addToList);
    document.getElementById('reset').addEventListener('click', (e) => {
        e.preventDefault();
        name.value = "";
        title.value = "";
        message.value = "";
    });

    const mailList = document.getElementById('list');
    const sentMailsList = document.querySelector('.sent-list');
    const deletedMailsList = document.querySelector('.delete-list');

    function addToList(event) {
        event.preventDefault();

        if (name.value == "" || title.value == "" || message.value == "") {
            // console.log('empty');
            return;
        };

        const li = document.createElement('li');
        const titleEl = document.createElement('h4');
        titleEl.textContent = `Title: ${title.value}`;
        li.appendChild(titleEl);

        const nameEl = document.createElement('h4');
        nameEl.textContent = `Recipient Name: ${name.value}`;
        li.appendChild(nameEl);

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = message.value;
        li.appendChild(descriptionSpan);

        const div = document.createElement('div');
        div.id = "list-action";
        const sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.id = 'send';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(e.target.parentElement.parentElement);

            const sentLi = document.createElement('li');
            const spanTo = document.createElement('span');
            spanTo.textContent = nameEl.textContent.replace('Recipient Name: ', 'To: ');
            sentLi.appendChild(spanTo);

            const spanTitle = document.createElement('span');
            spanTitle.textContent = titleEl.textContent;
            sentLi.appendChild(spanTitle);

            const divBtn = document.createElement('div');
            divBtn.className = 'btn';
            const delBtn = document.createElement('button');
            delBtn.type = 'submit';
            delBtn.className = 'delete';
            delBtn.textContent = 'Delete';
            divBtn.appendChild(delBtn)
            sentLi.appendChild(divBtn);
            sentMailsList.appendChild(sentLi);

            delBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                ev.target.remove();
                deletedMailsList.appendChild(sentLi);
            });
            li.remove();
        });
        div.appendChild(sendBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.id = 'delete';
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);
        li.appendChild(div);

        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            li.remove();
        });

        mailList.appendChild(li);

        name.value = "";
        title.value = "";
        message.value = "";
    };
};