function building(input) {

    let floors = Number(input[0])
    let rooms = Number(input[1])

    let large = ""
    let apartment = ""
    let office = ""
    let roomsCount = 0

    for (let currentFloor = floors; currentFloor > 0; currentFloor--) {
        for (let currentRoom = 0; currentRoom < rooms; currentRoom++) {

            roomsCount++

            if (currentFloor === floors) {
                large += `L${currentFloor}${currentRoom}` + " "
                if (roomsCount === rooms) {
                    console.log(large)
                    roomsCount = 0
                    large = ""
                }
            }
            else if (currentFloor % 2 === 0) {
                office += `O${currentFloor}${currentRoom}` + " "
                if (roomsCount === rooms) {
                    console.log(office)
                    roomsCount = 0
                    office = ""
                }
            }
            else if (currentFloor % 2 !== 0) {
                apartment += `A${currentFloor}${currentRoom}` + " "
                if (roomsCount === rooms) {
                    console.log(apartment)
                    roomsCount = 0
                    apartment = ""
                }
            }
        }
    }
}
building(["6", "4"])