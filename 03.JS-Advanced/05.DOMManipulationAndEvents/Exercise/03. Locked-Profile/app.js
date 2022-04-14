function lockedProfile() {

    // Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onclick)); // nedelegiran nachin

    document.getElementById('main').addEventListener('click', onclick); // delegiran nachin

    function onclick(e) {
        if (e.target.tagName == 'BUTTON') {     //proverkata na tagName zashtoto e s delegiran listener 
            let profile = e.target.parentElement
            let infoDiv = profile.querySelector('div');
            let unlock = profile.querySelector('input[type="radio"][value="unlock"]').checked;

            //AKO IMAME POVECHE OT EDIN DIV SHTE SE POLZVA KODAT PO DOLU !!!!

            // let infoDiv = Array.from(e.target.parentElement.querySelectorAll('div'))
            //     .find(d => d.id.includes('HiddenFields'));


            if (unlock) {
                if (e.target.textContent == "Show more") {
                    e.target.textContent = "Hide it";
                    infoDiv.style.display = 'block';
                } else {
                    e.target.textContent = "Show more";
                    infoDiv.style.display = '';

                }
            }
        }
    }
}