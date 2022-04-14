function onTime(input) {

    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let hourArrive = Number(input[2])
    let minuteArrive = Number(input[3])

    let examInMinutes = examHour * 60 + examMinute
    let arriveInMinets = hourArrive * 60 + minuteArrive

    if (examInMinutes === arriveInMinets) {
        console.log("On time")
    }
    else if ((examInMinutes - arriveInMinets) <= 30 && (examInMinutes - arriveInMinets) >= 0) {
        console.log("On time")
        console.log(`${examInMinutes - arriveInMinets} minutes before the start`)
    }
    else if ((examInMinutes - arriveInMinets) < 60 && (examInMinutes - arriveInMinets) >= 0) {
        console.log("Early")
        console.log(`${examInMinutes - arriveInMinets} minutes before the start`)
    }
    else if ((examInMinutes - arriveInMinets) >= 60) {
        if ((examInMinutes - arriveInMinets) % 60 < 10) {
            console.log("Early")
            console.log(`${Math.floor((examInMinutes - arriveInMinets) / 60)} : 0${(examInMinutes - arriveInMinets) % 60} hours before the start`)
        }
        else {
            console.log("Early")
            console.log(`${Math.floor((examInMinutes - arriveInMinets) / 60)} : ${(examInMinutes - arriveInMinets) % 60} hours before the start`)
        }
    }
    else if (arriveInMinets < examInMinutes + 60) {
        console.log("Late")
        console.log(`${arriveInMinets - examInMinutes} minutes after the start`)
    }
    else if ((arriveInMinets - examInMinutes) >= 60) {
        if ((arriveInMinets - examInMinutes) % 60 < 10) {
            console.log("Late")
            console.log(`${Math.floor((arriveInMinets - examInMinutes) / 60)} : 0${(arriveInMinets - examInMinutes) % 60} hours after the start`)
        }
        else {
            console.log("Late")
            console.log(`${Math.floor((arriveInMinets - examInMinutes) / 60)} : ${(arriveInMinets - examInMinutes) % 60} hours after the start`)
        }
    }
}
onTime(["14",
    "00",
    "13",
    "55"])


