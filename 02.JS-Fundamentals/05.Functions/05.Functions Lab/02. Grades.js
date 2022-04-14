function grades(grade) {

    let result = "";

    if (grade < 3) {
        result = "Fail";
        grade = 2;
        console.log(`${result} (${grade})`);
        return;
    } else if (grade < 3.50) {
        result = "Poor";
    } else if (grade < 4.50) {
        result = "Good";
    } else if (grade < 5.50) {
        result = "Very good";
    } else {
        result = "Excellent"
    }
    console.log(`${result} (${grade.toFixed(2)})`);
}
grades(3.33);
grades(4.50);
grades(2.99);