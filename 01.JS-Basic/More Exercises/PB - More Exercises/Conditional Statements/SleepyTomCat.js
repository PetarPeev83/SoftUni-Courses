function sleepyTomCat(input) {

    let hollydays = Number(input[0])
    let playNorm = 30000

    let hollydaysPlay = hollydays * 127
    let workDaysPlay = (365 - hollydays) * 63
    let totalPlay = hollydaysPlay + workDaysPlay

    if (totalPlay > playNorm) {
        console.log("Tom will run away")
        console.log(`${Math.floor((totalPlay - playNorm) / 60)} hours and ${(totalPlay - playNorm) % 60} minutes more for play`)
    }
    else {
        console.log("Tom sleeps well")
        console.log(`${Math.floor((playNorm - totalPlay) / 60)} hours and ${(playNorm - totalPlay) % 60} minutes less for play`)
    }

}
sleepyTomCat(["113"])