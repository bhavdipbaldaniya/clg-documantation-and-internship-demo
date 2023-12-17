class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement){
      this.previousOperandTextElement= previousOperandTextElement;
      this.currentOperandTextElement= currentOperandTextElement;
     this.clear();
  }
  
  clear(){
  this.currentOperand='0';
  this.previousOperand='';
  this.operation=undefined;
  
  }

    delete(){
    this.currentOperand = this.currentOperand.toString().slice(0,-1);
  }
  
  appendNumber(number){
  if(number==="." && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  
  chooseOperation(operation){
      if(this.previousOperand==='' && this.currentOperand==='') return;
      if(this.operation!=='' && this.previousOperand!=='' && this.currentOperand=='' && operation!='-'){
          this.operation = operation;
          return;
        }
    if(this.operation!=='' && this.previousOperand!=='' && this.currentOperand==='' && operation=='-'){
      if(this.operation=='*' || this.operation=='÷'){
        this.previousOperand= (this.previousOperand * -1);
        return;
      }
    }
      if(this.previousOperand!=='' && this.currentOperand!==''){
          this.compute();
      }
      this.operation= operation;
      this.previousOperand =this.currentOperand;
      this.currentOperand = '';
  }
  
  
  
  
  compute(){
  let computation;
  const prev = parseFloat(this.previousOperand, 10);
  const current = parseFloat(this.currentOperand, 10);
  if(isNaN(prev || isNaN(current )))return 
  switch (this.operation){
      case '+':
          computation = prev + current;
          break;
          case '-':
              computation = prev - current;
              break;
  
          case '*': 
          computation = prev * current;
          break;
   
          case '/':
              computation = prev / current;
              break;
              default:
                  return
  
  }
  
  this.currentOperand = computation;
  this.operation = undefined;
  this.previousOperand = '';
  }
  
  getDisplayNumber(number){
      const stringNumber = number.toString();
      const intergerNumber = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];
  let intergerDisplay;
  if(isNaN(intergerNumber)){
      intergerDisplay='';
  }else{
      intergerDisplay = intergerNumber.toLocaleString('en', 
      {maximumFractionDigits: 0});
  }
    if(decimalDigits!=null){
        return `${intergerDisplay}.${decimalDigits}`
    }else{
        return intergerDisplay;
    }
  }
  
  updateDisplay(){
      this.currentOperandTextElement.innerText=
          this.getDisplayNumber(this.currentOperand);
      
      if(this.operation!=null){
          this.previousOperandTextElement.innerText= 
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      }else{
          this.previousOperandTextElement.innerText='';
      }
  
  }
  }
  
  
  const numberButtons =document.querySelectorAll('[data-number]');
  const operationButtons =document.querySelectorAll('[data-operation]');
  const equalsButton =document.querySelector('[data-equals]');
  const deleteButton =document.querySelector('[data-delete]');
  const allClearButton =document.querySelector('[data-all-clear]');
  const previousOperandTextElement =document.querySelector('[data-previous-operand]');
  const currentOperandTextElement =document.querySelector('[data-current-operand]');
  
  
  const calculator = new Calculator(previousOperandTextElement,                             
       currentOperandTextElement);                              

  numberButtons.forEach(button=>{                               
      button.addEventListener('click',()=>{                             
          calculator.appendNumber(button.innerText);                                
          calculator.updateDisplay();                               
      })                                
  })                                

  operationButtons.forEach(button=>{                                
      button.addEventListener('click',()=>{                             
          calculator.chooseOperation(button.innerText);                             
          calculator.updateDisplay();                               
      })                                
  })                                

  equalsButton.addEventListener('click', button=>{                              
      calculator.compute();     
      calculator.updateDisplay();                               
  }                                 
  )                             

  allClearButton.addEventListener('click', button=>{                                
      calculator.clear();                               
      calculator.updateDisplay();                               
  }                                 
  )                             

  deleteButton.addEventListener('click', button=>{                              
      calculator.delete();                              
      calculator.updateDisplay();                               
  })                                