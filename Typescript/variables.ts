//variable - storage/container - which stores either a single value or multiple values
// There are 3 different keyword to declare a variable

//var - In modern JS & TS we do not use-> version 5 (ES6)
//2015 - ES 6 - ECMA SCRIPT 6
//let - If the value of the variable can change at any point of time
//const - To declare a constant variable
// const a = 10
// single line comment 
/* Multiple line comment */

//what is difference between var, let and const 

//Scope of varaible:
//1.Local scoped variable - when you try to declare a variable inside {...}
//2.Global scoped of variable - when you declare a variable outside of the {...}

let name1 = "TS" //Global scoped

{
    console.log("Line-30",name1)
    let age = 30 //Local scope
    console.log(age)
}
console.log("Line-37",name1)

//If we have the same variable at a global and local, which one will get used inside the local scoped

let language = "Typescript"
{
    let language = "JS"
    console.log(language) //JS //local scoped variable will be given a preference
}
//Day-02--------------------------------------------------
//var - This was only the keyword to declare a variable before 2015
//1. Scope - Global scope or Functional scope
// 2. whenever you declare a variable using a var keyword it can be re-declared and re-intialised as well
//3. Hoisting : we can access the variable before it's declaration as well but it will take the value as defined
//4. It is not mandatory to intialise the value of the variable at the time of dwclaration
//var num2 - //Declaration
//Re-declaration
var num1 = 10 //Intialisation
var num1 = 400
var num1 = 100
var  num1 = 3454336 //value of the varaible

console.log(num1)

var num2 = 10//declartion
num2 = 90   //re-intialisation
console.log(num2)


function add(){
    var i2 = 10 //local scoped variable 
}

var flag = true
if (2>1){
    var flag = false //re-declaration 
}
console.log(flag) //overrite global scope and printed the local scope

//let 
//1. Scope - Global scope or Block-Level(Local) scope {...}
//2. Whenever we declare a variable using let keyword it can be re-intialised but it
//cannot be re-declared
//3. Hoisting: We cannot access the variable before it's declaration as well but it will 
// take the values as undefined
//4. It is not mandatory to intialise the value of the varaible at the declaration

// let num4 = 90
// num4 = 90*2

// let login
// {
//     login = new Login()
// }

// {
//     login
// }

//const
//1. Scope - Global scope or Block-Level(Local) scope {...}
//2. Whenever we declare a variable using let keyword it can not be re-intialised but it
//cannot be re-declared
//3. Hoisting: We cannot access the variable before it's declaration as well but it will 
// take the values as undefined
//4. It is mandatory to intialise the value of the varaible at the declaration

const testing = true
{
    const test = true
    console.log(test)
    console.log(testing)

}
console.log(testing)
//testing = false //This is not allowed becuase its constant in nature






