function timeToWalk(steps, stepLengthMeters, speedPerHour) {

    let distanceMetres = steps * stepLengthMeters;
    let metersInSec = (speedPerHour * 1000 / 60) / 60;
    let delayInMins = Math.floor(distanceMetres / 500);
    let timeSec = (distanceMetres / metersInSec) + (delayInMins * 60);
    let mins = Math.floor(timeSec / 60);
    let sec = Math.round(timeSec % 60);
    let hours = Math.floor(timeSec / 60 / 60);

    console.log(`${hours > 9 ? hours : `0${hours}`}:${mins > 9 ? mins : `0${mins}`}:${sec > 9 ? sec : `0${sec}`}`);
}
// timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);