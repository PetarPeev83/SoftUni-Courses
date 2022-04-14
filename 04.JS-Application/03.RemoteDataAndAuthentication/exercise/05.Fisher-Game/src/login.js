
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout').style.display = 'none';
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin);
});

async function onLogin(event) {
    event.preventDefault();
   
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        };

        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('userData', JSON.stringify(userData)); // zapazvame v sessionStorage ili localStorage 
        //                                zaduljitelno (kluch(string) , stoinoost(ako ne e string triabva JSON.stringify(stoinost)))

        // document.getElementById('logout').style.display = '';
        window.location = '/index.html';
    } catch (error) {
        alert(error.message);
    }
}