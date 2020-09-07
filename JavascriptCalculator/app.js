var readlineSync = require('readline-sync');
var num1 = readlineSync.question('What is the first number? ')
var num2 = readlineSync.question('What is the second number? ')
var readlineSync = require('readline-sync')
var option = readlineSync.question('Type a for add, s for subtract, d for divide, or m for multiply. ')
function addition(num1, num2){
    console.log('The result is')
    console.log(num1+num2)
}
function subtract(num1, num2){
    console.log('The result is')
    console.log(num1-num2)
}
function divide(num1, num2){
    console.log('The result is')
    console.log(num1/num2)
}
function multiply(num1, num2){
    console.log('The result is')
    console.log(num1*num2)
}
if(option === 'a'){
    addition(Number(num1), Number(num2))
} else if(option === 's'){
    subtract(Number(num1), Number(num2))
} else if(option === 'd'){
    divide(Number(num1), Number(num2))
} else if(option === 'm'){
    multiply(Number(num1), Number(num2))
} else {
    (console.log('Not a valid option'))
}

