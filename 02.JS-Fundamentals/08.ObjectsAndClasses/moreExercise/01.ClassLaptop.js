function laptopClass() {
    let isOn = false;
    class Laptop {
        constructor(info, quality) {
            this.info = new Object(info);
            this.quality = Number(quality);
            this.price = this.getPrice(this.info.age , this.quality);
            this.isOn = isOn;
        }
        turnOn() {
            this.quality--;
            this.isOn = true;
        }
        turnOff() {
            this.quality--;
            this.isOn = false;
        }
        showInfo() {
            return JSON.stringify(this.info);
        }
        getPrice(age , quality){
          return  Number(800 - (age * 2) + (quality * 0.5));
        }
    }
    let info = { producer: "Dell", age: 2, brand: "XPS" }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)
}
laptopClass();