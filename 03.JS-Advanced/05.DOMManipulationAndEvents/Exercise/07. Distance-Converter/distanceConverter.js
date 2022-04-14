function attachEventsListeners() {

    let units = {
        km: 1,
        m: 0.001,
        cm: 0.00001,
        mm: 0.000001,
        mi: 1.60934,
        yrd: 0.0009144,
        ft: 0.0003048,
        in: 0.0000254,
    }
    function convert(value, unit) {
        let kilometres = value * units[unit];
        return {
            km: kilometres / units.km,
            m: kilometres / units.m,
            cm: kilometres / units.cm,
            mm: kilometres / units.mm,
            mi: kilometres / units.mi,
            yrd: kilometres / units.yrd,
            ft: kilometres / units.ft,
            in: kilometres / units.in,
        }
    }
    document.getElementById('convert').addEventListener('click', onConvert);
    let inputValue = document.getElementById('inputDistance');
    let inputUnit = document.getElementById('inputUnits');
    let output = document.getElementById('outputDistance');
    let outputUnit = document.getElementById('outputUnits');
    // console.log(inputUnit.value);
    // console.log(outputUnit.value);
    function onConvert(e) {
        let inputInKm = convert(Number(inputValue.value), inputUnit.value);
        console.log(inputInKm);
        output.value = inputInKm[outputUnit.value];
    }
}