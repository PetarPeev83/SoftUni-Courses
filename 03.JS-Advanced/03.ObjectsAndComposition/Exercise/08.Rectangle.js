function rectangle(width, height, color) {
    return rectObj = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea() {
            return Number(width) * Number(height);
        },
    }
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());