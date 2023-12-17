
function opreter(data){
    let result;
    const operator = ('Enter operator ( either +, -, * or / ): ');
    const number1 = parseFloat('20 Enter first number: ');
    const number2 = parseFloat('10 Enter second number: ');
    switch(data) {
        case '+':
             result = number1 + number2;
            console.log(`${number1} + ${number2} = ${result}`);
            break;
        case '-':
             result = number1 - number2;
            console.log(`${number1} - ${number2} = ${result}`);
            break;
        case '*':
             result = number1 * number2;
            console.log(`${number1} * ${number2} = ${result}`);
            break;
        case '/':
             result = number1 / number2;
            console.log(`${number1} / ${number2} = ${result}`);
            break;
    }
}
opreter('+');
opreter('-');
opreter('/');
opreter('*');
