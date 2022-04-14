function numbersDividedBy3() {

    let num = 1
    let finish = 100

    while (num <= 100) {
        if (num % 3 === 0) {
          console.log(num)
          num++
        }else {
            num++
        }
    }
}
numbersDividedBy3()