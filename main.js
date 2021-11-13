//1) Create an iffe that returns an object with fields: function setValue(), function showValue() 
// and function reverseValue(). Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
//Value can be type string or number.reverseValue():If number do (* (-1)), if string reverse it.Closure pattern.
console.log("---------------------------------------zadanie 1----------------------------------------------");
let iife = (function () {
    let value;
    function setValue(newValue) {
        if (newValue) value = newValue;
    }
    function showValue() { // show value ma tylko pokazać wartość
        if (value) console.log(value);
        else console.log("value is empty or not provided yet, use setValue function first");
    }
    function reverseValue() {
        // let typeOfValue = typeof value;
        // console.log(typeOfValue);
        switch (typeof value) { // sprawdzam który typ ma value 
            case "number": 
                value *= (-1);
                console.log("reverse value is", value)
                break;
            case "string":
                let reverseValue = "";
                for (let i = value.length - 1; i >= 0; i--) {
                    reverseValue += value[i];
                }
                value = reverseValue;
                console.log("reverse value is", value)
                break;
            default:
                console.log("problem with type of value, not string and not a number")
            
        }
    }
    return {
        setValue,
        showValue,
        reverseValue
    };
}());

iife.setValue("hello");
iife.showValue();
iife.reverseValue();

// 2) Create four function definitions. One for every basic math operations and taking two input parameters.
//  Create one more function. This function is to return calculation object.
//This object is to have parameters object field that holds two operation parameters inside(x and y) 
// and a function field that points to a function with math operation(defined at the beginning).
// A function setOperation() that sets the field from previous sentence 
// and a calculate() function that makes calculation and returns its value.

console.log("---------------------------------------zadanie 2----------------------------------------------");

let calculator = (function () {
    let x, y, operation = "";
    function add(firstNumber, secondNumber) {
        // console.log(firstNumber, secondNumber)
        return firstNumber + secondNumber;
    }
    function subtrackt(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
    function multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    function divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
    function setOperation(operationName) {
        operation = operationName;
        // console.log(typeof x)
        // console.log(operation)
    }
    function calculate() {
        let resoult;
        switch (operation) {
            case "+":
                resoult = add(this.parameters.x,this.parameters.y);
                // console.log(resoult)
                break;
            case "-":
                resoult = subtrackt(this.parameters.x, this.parameters.y);
                break;
            case "*":
                resoult = multiply(this.parameters.x, this.parameters.y);
                break;
            case "/":
                // console.log()
                if (this.parameters.y != 0) resoult = divide(this.parameters.x, this.parameters.y);
                else console.error("you can't divide by zero..!");
                break;
            default:
                console.log("problem with operation name, please check it:", operation)
        }
        return resoult;
    }
    return {
        parameters : {
        x: x,
        y: y
        },
        operation: operation,
        setOperation,
        calculate
   } 
}())

// console.log(calculator.parameters.x)
calculator.parameters.x = 3;
// console.log(typeof calculator.parameters.x)
calculator.parameters.y = 5;
// console.log(typeof calculator.parameters.y)
calculator.setOperation("+");
console.log(calculator.calculate());

//3
//  Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  BaseObject = { x, y, sum: function () { return this.x + this.y } }
// Example array: [{x:2,y:3},{x:-1,x:6},{x:0,x:8},…..]

console.log("---------------------------------------zadanie 3----------------------------------------------");

const arrayWithObjectToSum = [{ x: 2, y: 3 }, { x: -1, y: 6 }, { x: 0, y: 8 }, { x: 4, y: 3 }]

let BaseObject = {
    x:0,
    y:0,
    sum: function () {
        return this.x + this.y
    }
}

console.log(BaseObject.sum.call(arrayWithObjectToSum[0]));
console.log(BaseObject.sum.call(arrayWithObjectToSum[3]));