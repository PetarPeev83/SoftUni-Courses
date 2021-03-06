function validate() {
    let inputEmail = document.getElementById('email');
    let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    inputEmail.addEventListener('change', () => {
        if (!emailPattern.test(inputEmail.value)) {
            inputEmail.classList.add('error');
        } else {
            inputEmail.classList.remove('error');
        }
    });
}