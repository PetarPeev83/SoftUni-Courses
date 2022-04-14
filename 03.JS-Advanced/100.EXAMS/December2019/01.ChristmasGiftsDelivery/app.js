function solution() {
    let giftNameInput = document.querySelector('.card input');
    document.querySelector('.card div button').addEventListener('click', createElements);
    let giftList = document.querySelector('.card ul');
    let sendedGiftsList = document.querySelectorAll('.card ul')[1];
    let discardedGiftsList = document.querySelectorAll('.card ul')[2];

    function createElements() {
        if (giftNameInput.value.length == 0) {
            return;
        }
        let li = document.createElement('li');
        li.setAttribute('class', 'gift');
        li.textContent = giftNameInput.value;
        giftList.appendChild(li);

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = "Send";
        li.appendChild(sendBtn);
        sendBtn.addEventListener('click', (e) => {
            sendedGiftsList.appendChild(e.target.parentElement);
            e.target.parentElement.lastElementChild.remove();
            e.target.parentElement.lastElementChild.remove();
        });

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardBtnButton');
        discardBtn.textContent = "Discard";
        li.appendChild(discardBtn);
        discardBtn.addEventListener('click', (e) => {
            discardedGiftsList.appendChild(e.target.parentElement);
            e.target.parentElement.firstElementChild.remove();
            e.target.parentElement.firstElementChild.remove();
        });

        let liList = Array.from(giftList.children);
        liList.sort((a, b) => a.textContent.localeCompare(b.textContent)).map(element => giftList.appendChild(element));
        giftNameInput.value = "";
    }
}