function schoolGrades(input) {

    let studentList = {};

    for (let current of input) {
        let currentSplited = current.split(' ');
        let studentName = currentSplited.shift();
        let studentGrades = currentSplited;
        if (studentList.hasOwnProperty(studentName)) {
            studentList[studentName].push(...studentGrades);
        } else {
            studentList[studentName] = studentGrades;
        }
    }
    let sorted = Object.entries(studentList).sort((a, b) => average(a, b));
    function average(a, b) {
        let aAverage = a[1].map(Number).reduce((a, b) => a + b) / a[1].length;
        let bAverage = b[1].map(Number).reduce((a, b) => a + b) / b[1].length;
        return aAverage - bAverage;
    }
    for (let elemennt of sorted) {
        console.log(`${elemennt[0]}: ${elemennt[1].join(", ")}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);