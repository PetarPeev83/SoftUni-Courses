function solution() {
    const [inputSection, listSection, sentSection, discardedSection] = document.querySelectorAll('section');

    inputSection.querySelector('button').addEventListener('click', addToList);
    const list = listSection.querySelector('ul');
    const sent = sentSection.querySelector('ul');
    const discard = discardedSection.querySelector('ul');

    function addToList() {
        let input = inputSection.querySelector('input');
        // console.log(input.value);
        if (input.value == "") {
            return;
        };

        const li = document.createElement('li');
        li.className = "gift";
        li.textContent = input.value;
        const sendBtn = document.createElement('button');
        sendBtn.className = "sendButton";
        sendBtn.textContent = "Send";
        const discardBtn = document.createElement('button');
        discardBtn.className = "discardButton";
        discardBtn.textContent = "Discard";
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        list.appendChild(li);

        let sorted = Array.from(list.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        // console.log(sorted);
        sorted.map(el => list.appendChild(el));

        sendBtn.addEventListener("click", (e) => {
            sent.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();

        });
        discardBtn.addEventListener("click", () => {
            discard.appendChild(li);
            sendBtn.remove();
            discardBtn.remove();
        });

        input.value = "";
    };
};