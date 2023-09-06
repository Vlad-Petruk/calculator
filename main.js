const plus = '+';
const minus = '-';
const asterics = '*';
const slash = '/';


function calculateExpression(expression,operator) {
    const parts = expression.split(operator);
    if (parts.length === 2) {
      const num1 = parseFloat(parts[0]);
      const num2 = parseFloat(parts[1]);
      if (!isNaN(num1) && !isNaN(num2)) {
        if(operator === plus) {
        return num1 + num2;}
        else if (operator === minus) {
            return num1 - num2;
        } else if (operator === asterics) {
            return num1 * num2;}
            else if (operator === slash) {
                return num1 / num2;}
      }
    }
    return NaN; // Return NaN if the expression is invalid
  }

function add (a,b) {
    let addedNumbers = `${a} ${plus} ${b}`;
    return calculateExpression(addedNumbers,plus);
};

function substract (a,b) {
	let substractedNumbers = `${a} ${minus} ${b}`;
    return calculateExpression(substractedNumbers,minus);
};

function multiply(a,b) {
    let multipliedNumbers = `${a} ${asterics} ${b}`;
    return calculateExpression(multipliedNumbers,asterics);
}

function division (a,b) {
    let dividedNumbers = `${a} ${slash} ${b}`
    return calculateExpression(dividedNumbers,slash);
}

function operate (a,operator,b) {
    if (operator === plus){
        return add(a,b)
    } else if (operator === minus){
        return substract(a,b);
    } else if (operator === asterics){
        return multiply(a,b);
    } else if (operator === slash) {
        return division(a,b);
    }
    
}