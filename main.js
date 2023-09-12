const plus = '+';
const minus = '-';
const asterics = '*';
const slash = '/';

let a = '';
let b = '';
let operator = '';
let total = '';

let butCont = document.querySelectorAll('.but-cont');
let btnOperator = document.querySelectorAll('.btn-operator')
let display = document.querySelector('#display');
let btnClear = document.querySelector('.clear');
let btnEqual = document.querySelector('.equal');


// function calculateExpression(expression,operator) {
//     const parts = expression.split(operator);
//     if (parts.length === 2) {
//       const num1 = parseFloat(parts[0]);
//       const num2 = parseFloat(parts[1]);
//       if (!isNaN(num1) && !isNaN(num2)) {
//         if(operator === plus) {
//         return num1 + num2;}
//         else if (operator === minus) {
//             return num1 - num2;
//         } else if (operator === asterics) {
//             return num1 * num2;}
//             else if (operator === slash) {
//                 return num1 / num2;}
//       }
//     }
//     return NaN; // Return NaN if the expression is invalid
//   }

function clear () {
    a = '';
    b = '';
    operator = '';
    display.value = 0;
}

function add (a,b) {
    let addedNumbers;
    a = Number(a);
    b = Number(b);
    addedNumbers = a + b;
    return addedNumbers;
};

function substract (a,b) {
	let substractedNumbers = a - b;
    return substractedNumbers;
};

function multiply(a,b) {
    let multipliedNumbers = a * b;
    return multipliedNumbers;
}

function division (a,b) {
    let dividedNumbers = a / b;
    return dividedNumbers;
} 

function operate (a,operator,b) {
    if (operator === '+'){
        return add(a,b)
    } else if (operator === '-'){
        return substract(a,b);
    } else if (operator === '*'){
        return multiply(a,b);
    } else if (operator === '/') {
        if (b === '0'){
            alert("Don't you dare" );
            return
        } else return division(a,b);
    }
    
}

butCont.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        if(operator == '') {
        a += btn.textContent;
        display.value = a;
    } else {
        b += btn.textContent;
        display.value = b;
    }
    console.log(a);
    console.log(b);
    })
})

btnOperator.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        operator = '';
        b = '';
        operator += btn.textContent;
        console.log(operator);
    })
})
btnEqual.addEventListener('click',()=>{
    if (a !== '') {
        let result = operate(a,operator,b);
        console.log(result)
        if (result === undefined){
            return clear();
        } else {display.value = result;} 
    // } else {display.value = result.toFixed(2);}  Trying to deal with decimals(don`t work as expected) 
        operator = '';
        b = '';
        a = result;
    }
})

btnClear.addEventListener('click',()=>{
    clear()
})