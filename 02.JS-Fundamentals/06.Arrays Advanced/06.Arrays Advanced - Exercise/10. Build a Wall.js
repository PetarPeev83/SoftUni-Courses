function bildWall(startingPointArr) {

    let cubicCounter = 0;
    let concreteUsedEveryDay = [];
    let dayWork = startingPointArr.map(Number);

    while (dayWork.length > 0) {
        if (dayWork.includes(30)) {
            indexToRemove = dayWork.indexOf(30);
            dayWork.splice(indexToRemove, 1);
            continue;
        }
        dayWork = dayWork.map(x => x + 1);
        cubicCounter += dayWork.length * 195;
        concreteUsedEveryDay.push(dayWork.length * 195);

    }
    console.log(concreteUsedEveryDay.join(", "));
    console.log(`${cubicCounter * 1900} pesos`);
}
bildWall([21, 25, 28]);
// bildWall([17]);
// bildWall([17, 22, 17, 19, 17]);