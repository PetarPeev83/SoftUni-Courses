class Company {
    constructor() {
        this.departments = {};
    };
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0 ) {
            throw new Error("Invalid input!");
        };
        if (!this.departments[department]) {
            this.departments[department] = [];
        };
        this.departments[department].push({ name, position, salary });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };
    bestDepartment() {
        let best;
        let bestAverageSalary = 0;

        for (let current in this.departments) {
            let totalSalary = 0;
            this.departments[current].forEach(obj => totalSalary += obj.salary);
            let currentAverageSalary = totalSalary / this.departments[current].length;
            if (currentAverageSalary >= bestAverageSalary) {
                bestAverageSalary = currentAverageSalary;
                best = current;
            }
        }
        let output = `Best Department is: ${best}\n` + `Average salary: ${bestAverageSalary.toFixed(2)}\n`;
        let sortedByName = this.departments[best].sort((a, b) => a.name.localeCompare(b.name));
        let sortedBySalary = sortedByName.sort((a, b) => b.salary - a.salary);
        let sortedArr = [];
        sortedBySalary.forEach(element => sortedArr.push(`${element.name} ${element.salary} ${element.position}`));
        output += sortedArr.join('\n');
        return output;
    };
};

let c = new Company();
let a = c.addEmployee("Stanimir", 2000, "engineer", "Construction");
console.log(a);
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

// console.log(c.departments);
console.log(c.bestDepartment());