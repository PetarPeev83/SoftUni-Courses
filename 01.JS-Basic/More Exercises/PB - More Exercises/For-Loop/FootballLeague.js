function footballLeague(input) {

    let stadiumCapacity = Number(input[0])
    let fensNum = Number(input[1])
    let sectorA = 0
    let sectorB = 0
    let sectorV = 0
    let sectorG = 0

    for (let i = 2; i <= input.length - 1; i++) {
        let fensSector = String(input[i])
        switch (fensSector) {
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }
    console.log(`${(sectorA / fensNum * 100).toFixed(2)}%`)
    console.log(`${(sectorB / fensNum * 100).toFixed(2)}%`)
    console.log(`${(sectorV / fensNum * 100).toFixed(2)}%`)
    console.log(`${(sectorG / fensNum * 100).toFixed(2)}%`)
    console.log(`${((sectorA + sectorB + sectorV + sectorG) / stadiumCapacity * 100).toFixed(2)}%`)
}
footballLeague(['93', '16', 'A', 'V', 'G', 'G', 'B', 'B', 'G', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A'])