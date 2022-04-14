function validate() {
    let [userName, email, password, passwordConfirm, isCompany] = document.querySelectorAll('#userInfo div input');
    let submitBtn = document.getElementById('submit');
    let companyInfo = document.getElementById('companyInfo');
    let isValid = document.getElementById('valid');

    submitBtn.addEventListener('click', validation);

    isCompany.addEventListener('change', () => {
        if (isCompany.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });
    function validation(event) {
        event.preventDefault();
        let userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /.*@.*\..*/;
        let passwordPattern = /^\w{5,15}$/;
        let valid = true;

        if (!userNamePattern.test(userName.value)) {
            userName.style = 'border-color: red';
            valid = false;
        } else {
            userName.style = 'border-color: none';
        }
        if (!emailPattern.test(email.value)) {
            email.style = 'border-color: red';
            valid = false;
        } else {
            email.style = 'border-color: none';
        }
        if (password.value !== passwordConfirm.value || !passwordPattern.test(password.value)) {
            password.style = 'border-color: red';
            passwordConfirm.style = 'border-color: red';
            valid = false;
        } else {
            password.style = 'border-color: none';
            passwordConfirm.style = 'border-color: none';
        }
        if (isCompany.checked) {
            let companyNumber = document.getElementById('companyNumber');
            let companyNumberValue = Number(companyNumber.value)
            if (companyNumberValue < 1000 || companyNumberValue > 9999) {
                companyNumber.style = 'border-color: red';
                valid = false;
            } else {
                companyNumber.style = 'border-color: none';
            }
        }
        if (valid) {
            isValid.style.display = 'block';
        } else {
            isValid.style.display = 'none';
        }
    }
}