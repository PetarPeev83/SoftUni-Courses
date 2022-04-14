/* function attachEventsListeners() {
    let units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    function convert(value, unit) {
        let inDays = value / units[unit];
        return {
            days: inDays,
            hours: inDays * units.hours,
            minutes: inDays * units.minutes,
            seconds: inDays * units.seconds,
        }
    }
    // window.convert = convert   //   pravim funkciata globalna za da e dostupim i testvame v brauzara
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onCnvert);
    document.getElementById('hoursBtn').addEventListener('click', onCnvert);
    document.getElementById('minutesBtn').addEventListener('click', onCnvert);
    document.getElementById('secondsBtn').addEventListener('click', onCnvert);

    function onCnvert(e) {
        let input = e.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id)
        // console.log(time);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }
}
*/
//  AKO IZPOLZVAME DELIGIRANE ZA DA HVANEM RODITELIA NA VSICHKI BUTONI

function attachEventsListeners() {
    let units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    function convert(value, unit) {
        let inDays = value / units[unit];
        return {
            days: inDays,
            hours: inDays * units.hours,
            minutes: inDays * units.minutes,
            seconds: inDays * units.seconds,
        }
    }
    // window.convert = convert   //   pravim funkciata globalna za da e dostupim i testvame v brauzara
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onCnvert);

    function onCnvert(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') { // proverki zashtoto e delegiran listener na parenta 
            console.log(e.target);
            let input = e.target.parentElement.querySelector('input[type="text"]');
            let time = convert(Number(input.value), input.id)
            // console.log(time);
            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }

    }
}