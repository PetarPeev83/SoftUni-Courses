function cityTaxes(name, population, treasury) {
    let result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor((percentage / 100) * this.population);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil((percentage / 100) * this.treasury)
        },
    };
    return result;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);
