function triangleArea(a, b, c) {

    let s = (a + b + c) / 2;                                //semiPerimeter;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));  // Heron's formula ;

    console.log(area);
}
triangleArea(2, 3.5, 4);