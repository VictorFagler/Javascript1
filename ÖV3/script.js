
function colors(num){
    if (num <= 12){
    console.log('White');
    }
    else if (num >= 13 && num <= 18){
    console.log('Green');
    }
    else if (num >= 19 && num <= 25){
    console.log('Red');
    }
    else if (num >= 26 && num <= 99){
    console.log('Blue');
    }
    else{
    console.log('Black');
    }
}
let x = 30
colors(x)


hello = () => {console.log('Hello world')}
hello()

calc = (numberOne, numberTwo) => {
return numberOne + numberTwo;
}
console.log(calc(2,3))


tip = (sum, percent) => {
let total = sum + sum * percent;
return total;
}
console.log(tip(10, 0.05))

