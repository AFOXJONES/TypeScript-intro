
function addNumbers(a:number, b:number){
return a+b;
}

//Funciones de flecha o lambda functions+
const addNumbersArrow = (a: number, b: number):string =>{
    return `${a+b}`;//regresar el producto de a + b
}

function multiply(firstNumber:number,base:number,secondNumber?:number){
    return firstNumber*base;
}

const result:string=addNumbers(1,2).toString();


const result2:string=addNumbersArrow(1,4);


const multiplyResult:number=multiply(1,4,3);


console.log(result,result2,multiplyResult);
export{};