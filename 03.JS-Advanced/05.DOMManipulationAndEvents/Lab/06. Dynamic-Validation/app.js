function validate() {

    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        // ако винаги ще взимаме таргета на евента може да го деструкторираме -  onChange({target}) ;
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (pattern.test(event.target.value)) {
            // регекса .test връща true/false (ако pattern съвпада с подаденото в скобите връща true)
            event.target.classList.remove('error');
            // ako e destruktorirano - target.classList.remove('error');
        } else {
            event.target.classList.add('error');
            // ako e destruktorirano - target.classList.add('error');
        }
    }
}