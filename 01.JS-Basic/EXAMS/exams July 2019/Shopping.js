function shopping(input) {

    let buget = Number(input[0])
    let videocards = Number(input[1])
    let processors = Number(input[2])
    let ramMemories = Number(input[3])

    let videocardPrice = 250
    let processorPrice = (videocards * videocardPrice) * 0.35
    let ramMemoryPrice = (videocardPrice * videocards) * 0.10

    let total = (videocards * videocardPrice) + (processors * processorPrice) + (ramMemories * ramMemoryPrice)

    if (videocards > processors) {
        total = total * 0.85
    }

    if (buget >= total) {
        console.log(`You have ${(buget - total).toFixed(2)} leva left!`)
    }
    else { console.log(`Not enough money! You need ${(total - buget).toFixed(2)} leva more!`) }
}
shopping(['900', '2', '1', '3'])