// // // let age = 34; //Global scope

// // // if(true){
// // //     let fName = 'Victor'
// // //     console.log('inne i första kodblocket', age, fName);
// // // }

// // //FUNCTIOMS
// // // är till för att underlätta, så vi slipper repetera vår kod

// // function hej(){
// //     console.log('hej på dig');
// // }

// // const greet=function(){
// //     console.log('hur är läget');
// // }

// // //Köra en funktion
// // hej();
// // greet();

// let firstName = 'Victor';

// const greet = function(name) {
// console.log(`hej ${name} hur är läget`);
// }

// // greet('Joakim')

// const getFullName = function(firstName, lastName){
//     let fullName = firstName + ' ' + lastName;
//     return fullName;
// }

// const fullName = getFullName('Victor','Fagler')

// // console.log(fullName);
// // console.log(getFullName('hans', 'göran'));

const calc = function(num1, num2){
    let sum = +num1 + +num2
    return sum
}

console.log(calc(5, 10));
console.log(calc('5', + '10'));
console.log(calc('hej', + 'då'));

// ARROW FUNCTION
const calc2 = (num1, num2) => {
    let sum = +num1 + +num2;
    return sum;
}
const calc3 = (num1, num2) => +num1 + +num2;
console.log(calc3(10, 10));

//När man bara har 1 paramenter behövs inte parenteser.
const greet2 = name => `hejsan ${name}`;
console.log(greet2('Hasse'))

// En arrow function syfte är att INTE binda nyckelorder "this"

// METODER - funktioner som hör ihop med ett objekt

const user = {
    firstName: 'Joakim',
    lastName: 'Wahl',
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    arrow: () => {
        console.log('arrow function', this);

    },
    regularFunction: () {
        console.log('regular', this);
    }
}

user.arrow()
user.regularFunction()











