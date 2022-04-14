function solution() {
    displayProfiles();
    document.getElementById('main').addEventListener('click', displayMore);
};
solution();

async function displayProfiles() {
    const mainSection = document.getElementById('main');
    const [allProfiles, allInfo] = await Promise.all([
        getProfiles(),
        loadMoreInfo()
    ]);

    allProfiles.forEach(element => {
        let div = document.createElement('div');
        div.className = "accordion";
        mainSection.appendChild(div);
        let divHead = document.createElement('div');
        divHead.className = "head";
        div.appendChild(divHead);
        let span = document.createElement('span');
        span.textContent = element.title;
        divHead.appendChild(span);
        let button = document.createElement("button");
        button.className = "button";
        button.id = element._id;
        button.textContent = "More";
        divHead.appendChild(button);

        const currentInfo = Object.values(allInfo).filter(i => element._id == i._id);
        let divExtra = document.createElement('div');
        divExtra.className = "extra";
        div.appendChild(divExtra);
        let p = document.createElement('p');
        p.textContent = currentInfo[0].content;
        divExtra.appendChild(p);
    });
};

async function displayMore(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    };
    const parentDiv = e.target.parentElement.parentElement;
    let extraSection = parentDiv.querySelector('.extra');
    e.target.textContent = e.target.textContent == 'More' ? 'Less' : 'More';
    extraSection.style.display == 'none' || extraSection.style.display == '' ? extraSection.style.display = 'block' : extraSection.style.display = 'none';
};

async function getProfiles() {
    const url = "http://localhost:3030/jsonstore/advanced/articles/list";
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

async function loadMoreInfo() {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
};

/*
function toggle() {
    
    let button = document.querySelector(".button");
    let text = document.getElementById('extra');

    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

    text.style.display == 'none' || text.style.display == '' ? text.style.display = 'block' : text.style.display = 'none';
}
*/