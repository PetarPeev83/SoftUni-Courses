function calculator() {
    let x;
    let y;
    let result;
    return {
        init: (selector1, selector2, resultSelector) => {
            x = document.querySelector(selector1);
            y = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add: () => { result.value = Number(x.value) + Number(y.value) },
        subtract: () => { result.value = Number(x.value) - Number(y.value) },
    }
}
let calculate = calculator();
calculate.init('#num1', '#num2', '#result');
