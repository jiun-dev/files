const calculator = {
    plus:function(a,b){
        return a + b;
    },
    minus:function(a,b){
        return a - b;
    },
    multi:function(a,b){
        return a * b;
    },
    div:function(a,b){
        return a / b;
    },
    exponentiation:function(a,b){
        return a ** b;
    },
}

//  console.log(greetNicolas)
const plus = calculator.plus(5, 5)
const minus = calculator.minus(10, 5)
const multi = calculator.multi(10, 5)
const div = calculator.div(10, 5)
const exponentiation = calculator.exponentiation(10, 5)
console.log(plus)
console.log(minus)
console.log(multi)
console.log(exponentiation)