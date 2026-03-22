//Data types - Which defines what type of data a variable is storing

//int i = 10 -- Java 
//string s = "Test"
//let s1 = "Test"

//Syntax
//keyword(var/let/const) variableName: datatype(Optional) = value

//There are 2 types of datatypes

//1. Primitive data type - Only have a single value
    //1.numbr
    //2.string
    //3.boolean
    //4.null
    //5.undefined
    //6.Union (|) - Combination of other datatype (number | string)
    //7.any

//Note : 1.By default any type of variable will have a value as "undefined"
let str1
console.log(str1)
// 2.By default the datatype of a variable will be "any"
let str3 :any = 10
str3 = "test"

//1.number - Combination of integer (98, -90) and floating (34.45, -5435.4365)

let num5: number = 10 //Type Annotation
let num6 = "100" //Type Interference
//What is difference between Type Annotation and Type Interference
//whever we define the datatype of a varaible explicitly is known as Type Annotation
//Whenver JS & TS is able to identify the datatype of a varaible impicitly is known as Type Inference

//2.string - Sequence of characters - string, text, hello

let str = "string"

//1. Single quote ('') single literal
//2. Single quote ("") single literal
//3.Backtick (``) for parameterization of string ${varaibleName}
//There are 2 main purpose of defining the string by using backtick
//1.Multi line string
let multilineStr = `This is a 
multiisLineBreak string`
console.log(multilineStr)

//2. For string paramterization - ${variableName}- calling a variable inside a string

let age = 20
let message =  `your age is ${age}`
console.log(message)

//3.boolean - true/false
console.log(2>6);

//4. null - Intenntional absence of a value
let num :null = null

//5. undefined - 

let any1
console.log(any1)
//let lp : undefined
// lp = new LoginPage()
let unefinedVar : undefined = undefined

//6. Union (|) - Combination of multiple datatype
let num1 : (number | string | boolean) = 10
console.log(num1)
num1 = "TS"
console.log(num1)
num1 = true
console.log(num1)

//7. any - free to accept any datatype
let num2 : any = 10
num2 = "TS"
num2 = true
num2 = null
num2 = undefined

//8. void - nothing - It is used inside the function as a return type
//When a function is not returning anything by default that function will have 
// a datatype as void 

function add(): void{ //This function is not returning anything
    console.log("Welcome to addition")
}
//If you define it inside of a class that is - Method
//If you define it outside of the class is - Function

let d = " "
console.log(d)

console.log(typeof d)  //it gives data type









//2. Non-Primitive data type - Can store more than one value
    //1.Functions
    //2.Array
    //3.Object {key : value}


