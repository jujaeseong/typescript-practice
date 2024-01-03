{
  type Operations = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

  function calculate(
    operation: Operations,
    firstOperand: number,
    secondOperand: number
  ) {
    switch (operation) {
      case 'add':
        console.log(firstOperand + secondOperand);
        break;
      case 'substract':
        console.log(firstOperand - secondOperand);
        break;
      case 'multiply':
        console.log(firstOperand * secondOperand);
        break;
      case 'divide':
        console.log(firstOperand / secondOperand);
        break;
      case 'remainder':
        console.log(firstOperand % secondOperand);
        break;
      default:
        const _exhuastiveCheck: never = operation;
        throw new Error('Invalid operation.');
    }
  }
}
