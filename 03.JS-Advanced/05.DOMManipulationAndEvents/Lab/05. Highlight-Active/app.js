function focused() {

    const fields = Array.from(document.getElementsByTagName('input'));
    // МОЖЕ СЪС СПРЕАД ОПЕРАТОРА , НО ЗАРАДИ ДЖЪДЖ НЕ ГО ПОЛЗВАМЕ
    // const fields = [...document.getElementsByTagName('input')];

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentNode.className = 'focused';
        // event.target.parentNode.classList.add('focused');
    }
    function onBlur(event) {
        event.target.parentNode.className = '';
        // event.target.parentNode.classList.remove('focused');

    }
}