window.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-view #register');
    registerForm.addEventListener('submit', onRegister);
    document.getElementById('logout').style.display = 'none';
});

async function onRegister(event) {
    event.preventDefault();

    const registerForm = document.querySelector('#register-view #register');
    const formData = new FormData(registerForm);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('rePass').trim();

    try {
        if (password !== rePass) {
            throw new Error(`Error: The password didn't match`);
        };
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.status != 200) {
            const error = await response.json();
            throw new Error(`Error: ${error.message}`);
        };

        const data = await response.json();

        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };
        sessionStorage.setItem('userData', JSON.stringify(userData));

        registerForm.reset();
        window.location = '/index.html'

    } catch (err) {
        alert(err.message);
    };
};
