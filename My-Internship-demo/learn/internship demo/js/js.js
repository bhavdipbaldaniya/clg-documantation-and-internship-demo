
// function mydata(p1,p2){
//     return p1 * p2;
//     // mydata=(5,6);
//     console.log(mydata=8,9
//         );
//     }
    
// var sudo = (function(arr, obj) {
//     [
//         ['forEach', arr, 'each'],
//         ['map', arr],
//         ['indexOf', arr],
//         ['filter', arr],
//         ['hasOwnProperty', obj, 'has'],
//         ['toString', obj]
//     ].forEach(function(method) {
//         var fn = method[1][method[0]];
//         obj[method[2] || method[0]] = fn.call.bind(fn);
//     });
//     return obj;
    
// })([], {});
// console.log(sudo);


// program for a simple calculator

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
//     console.log(result);
// }
// else if (operator == '-') { 
//     result = number1 - number2;
//     console.log(result);
// }
// else if (operator == '*') {
//     result = number1 * number2;
//     console.log(result);
// }
// else {
//     result = number1 / number2;
//     console.log(result);
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);







function display(val){

    document.getElementById('result').value += val

    return val

}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y
    console.log(solve);

}
function clearScreen(){

    document.getElementById('result').value = ''

}