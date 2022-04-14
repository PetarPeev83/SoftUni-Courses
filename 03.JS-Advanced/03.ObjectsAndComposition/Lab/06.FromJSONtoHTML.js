function JSONtoHTML(json) {

    let arr = JSON.parse(json);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = [];
        for (let currentObj of arr) {
            for (let key of Object.keys(currentObj)) {
                if (!result.includes(key))
                    result.push(key);
            }
        }
        return "   <tr><th>" + result.join("</th><th>") + "</th></tr>";
    }
    function makeValueRow(obj) {
        let result = [];
        for (let key of Object.keys(obj)) {
            result.push(obj[key]);
        }
        return "   <tr><td>" + result.join("</td><td>") + "</td></tr>";
    };
    function escapeHtml(value) {

    };
    console.log(outputArr.join('\n'));
}
// JSONtoHTML(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`);
JSONtoHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);