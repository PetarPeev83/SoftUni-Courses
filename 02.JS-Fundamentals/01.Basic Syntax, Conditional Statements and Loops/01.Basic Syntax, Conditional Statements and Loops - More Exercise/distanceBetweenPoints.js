function distanceBetweenPoints(x1, y1, x2, y2) {

//за да намеря разстоянието между двете точки си представих ,
// че четерите точки формират правоъгълник и диагоналът му
//  се явява разстоянието което търся (питагоровата теорема в този случай)!!!

    let sideX = Math.abs(x2 - x1);
    let sideY = Math.abs(y2 - y1);

    let distanceBetween = Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));

    console.log(distanceBetween);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);