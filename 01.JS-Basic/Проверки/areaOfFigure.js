function areaOfFigure(input) {

    let fig = input[0]
    let a = Number(input[1])
    let b = Number(input[2])
 
    area = 0

    if (fig === "square") {
        area = a * a
        
    }
    else if (fig === "rectangle") {
        area = a * b
        
    }
    else if (fig === "circle") {
        area = Math.PI * a * a
       
    }
    else if (fig === "triangle") {
        area = a * b / 2
       
    }

    console.log(area.toFixed(3))


}
areaOfFigure(["triangle", "4.5", "20"])

