function truckDriver(input) {

    let season = input[0]
    let milegePerMounth = Number(input[1])
    let pricePerKm = 0

    switch (season) {
        case "Autumn" :
            if (milegePerMounth <= 5000) {
                pricePerKm = 0.75
            } else if (milegePerMounth > 5000 && milegePerMounth <= 10000) {
                pricePerKm = 0.95
            } else if (milegePerMounth > 10000 && milegePerMounth <= 20000) {
                pricePerKm = 1.45
            }; break;
        case "Spring" :
            if (milegePerMounth <= 5000) {
                pricePerKm = 0.75
            } else if (milegePerMounth > 5000 && milegePerMounth <= 10000) {
                pricePerKm = 0.95
            } else if (milegePerMounth > 10000 && milegePerMounth <= 20000) {
                pricePerKm = 1.45
            }; break;
        case "Summer": if (milegePerMounth <= 5000) {
            pricePerKm = 0.90
        } else if (milegePerMounth > 5000 && milegePerMounth <= 10000) {
            pricePerKm = 1.1
        } else if (milegePerMounth > 10000 && milegePerMounth <= 20000) {
            pricePerKm = 1.45
        }; break;
        case "Winter": if (milegePerMounth <= 5000) {
            pricePerKm = 1.05
        } else if (milegePerMounth > 5000 && milegePerMounth <= 10000) {
            pricePerKm = 1.25
        } else if (milegePerMounth > 10000 && milegePerMounth <= 20000) {
            pricePerKm = 1.45
        }; break;
    }

    let total = milegePerMounth * pricePerKm * 4

    console.log((total * 0.9).toFixed(2))
}
truckDriver(['Autumn', '8000'])