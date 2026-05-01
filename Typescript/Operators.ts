//Operators - Operators is a sumbol that performs various operations

//1. Arithmetic Operators
//2. Comparison Operators
//3. Logical Operators
//4. Assignment Operators
//5. Ternary Operators - If else statement

//1. Arithmetic Operators - which are used to perform mathematical operations
    //1. Addition (+) - Addition or Concatenation
    //2. Subtraction (-) - Subtracts one value from another
    //3. Multiplication (*) - Multiplies two values
    //4. Division (/) - Divides one value by another
    //5. Modulus (%) - Returns the remainder of a division operation
    //6. Exponentiation (**) - Raises a base to the power of an exponent
    //7. Increment (++) - Increases a value by 1
    //8. Decrement (--) - Decreases a value by 1

    let number1 = 10
    let number2 = 3

    //1. Addition (+)
    console.log(number1 + number2) 

    //2. Subtraction (-)
    console.log(number1 - number2)

    //3. Multiplication (*)
    console.log(number1 * number2)  

    //4. Division (/)  
    console.log(number1 / number2) // 10/3 = 3.3333333333333335

    //5. Modulus (%) - Returns the remainder of a division operation
    console.log(number1 % number2) //10%3 = 1

    //6. Exponentiation (**) - Power of a number
    console.log(number1 ** number2) //10**3 = 10*10*10 = 1000

    //7. Increment (++) - Increases a value by 1
    let num3 = 10

    //a. pre-increment (++num3) - First the value of the varaiable will get increment
    // and the action will be performed
    
    console.log(++num3) // 1 + 10 = 11

    //b. post-increment (num3++) - First the action will be peformed
    // and then the value will be incremented

    let num4 = 5
    console.log(num4++) //5 // print - num4 - 5++ = 5+1 = 6
    console.log(num4) //6

    //8. Decrement (--) - Decreases a value by 1

    let num5 = 10
    console.log(num5--) //10 //print - num5 - 10-- = 10-1 = 9

    // Pre-decrement (--varName) - First the value of the variable will get decremented and then the action will be performed
    
    let num6 = 7
    console.log(--num6) //7 -- = 7- 1 = 6
    console.log(num6) //6

    // Post-decrement (--varName) - First the action will be performed and then the value will be decremented

    //Loops - for, while, do-while

    console.log("*************************************")
    
    
    //2. Comparison Operators - Used to compare the two values and return the result
    // in the form of boolean value (true or false)

    //1.Equal to (==)
    //2. Not Equal to (!=)
    //3. Strict Equal to (===)
    //4. Strict Not Equal to (!==)
    //5. Greater than (>)
    //6. Less than (<)
    //7. Greater than or equal to (>=)
    //8. Less than or equal to (<=)

    //what is the difference between =, == and ===?
    //Type conversion and Type coercion

    //1. Equal to (==) - Checks if the two values are same or not

    let num9 = 10
    let num10 = "10"
    console.log(num9 == num10) //true //10 == 10


// Type coercion : Implicitly conversion of one datatype into another datatype
// Type conversion : Explicitly conversion of one datatype into another datatype

    //2. Not Equal to (!=) - Checks if the two values are not same
    console.log(num9 != num10) //false //10 != 10

    //3. Strict Equal to (===) - Checks if the two values along with the DATATYPE of the 
    //variables are same or not
    console.log(num9 === num10) //false //10 === "10" - false because the datatypes are different

    //4. Strict Not Equal to (!==) - Checks if the two values along with the DATATYPE 
    // of the variables are not same

    console.log(num9 !== num10) //true //10 !== "10" - true because the datatypes are different

//3. Logical Operation - Used to combine multiple conditions to 
//get the final result
// It will compare 2 expressions and return us the result in the form of 
//boolean

//1. AND(&&) - Both are coditions are true then only it will return us true
//2. OR(||) - Either of the condition is true then it will return us true
//3. NOT(!) - It will reverse the result from true to false and vice versa

//1. AND(&&)
//  true && true = true
//  true && false = false
//  false && true = false
//  false && false = false

console.log("AND (&&)", (10>6) && (10>5)) //true
console.log("AND (&&)", (10>6) && (10>15)) //false
console.log("AND (&&)", (10>16) && (10>5)) //false
console.log("AND (&&)", (10>16) && (10>15)) //false

//1. NOT(!)
// true || true = true
// true || false 
// false || true = true
// false || false = false   
//NOT(!) - Reverse the result
console.log("NOT (!)", !(10>6)) //false
console.log("NOT (!)", !(10>15)) //true 
console.log("NOT (!)", !(10>16)) //true
console.log("NOT (!)", !(10>15)) //true







