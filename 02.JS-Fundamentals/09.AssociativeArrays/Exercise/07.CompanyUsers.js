function companyUsers(input) {
    let companyList = {};
    for (let current of input) {
        [companyName, employeeID] = current.split(" -> ");
        if (companyList.hasOwnProperty(companyName)) {
            companyList[companyName].push(employeeID);
        } else {
            companyList[companyName] = [employeeID];
        }
    }
    let sorted = Object.entries(companyList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let arr of sorted) {
        let company = arr[0];
        console.log(company);
        let settedArr = [...new Set(arr[1])];
        settedArr.forEach(element => { console.log(`-- ${element}`); });
    }
}
// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345']);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);