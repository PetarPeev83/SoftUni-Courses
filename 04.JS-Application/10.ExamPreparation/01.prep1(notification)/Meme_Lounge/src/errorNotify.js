
const element = document.getElementById('errorBox');
const output = element.querySelector('#errorBox span');

export function notify(msg) {
    output.textContent = msg;
    element.style.display = 'block';

    setTimeout(() => element.style.display = 'none', 3000); // kogato se pokaje setvame 3 secundi i da izchezne;
};