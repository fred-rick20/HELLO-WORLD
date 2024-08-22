//single line comment


/**
 * multiple
 * line
 * comment
 */

/**
 * functions 
 * a functions is a set by set instruction given to 
 * the computer to perform a particular task
 * also known as a algorithm
 * note:if a function does not return any data 
 * then it returns as undefined by default
 * 
 * 
 * 
 * syntax
 * function functionName(params){
 * return
 * }
 * 
 * 
 * function-> this is the keyword
 * functionNAme-> this is like a variable name hence it also follows the rules of variable naming its
 *               the unique name given to a function
 * 
 * params->this helps the function take in dynamic data, that we use throughout the function body
 * 
 * return-> this helps in returning our result or output from a function call
 * 
 * types of functions 
 * predefined-these are functions that comes with the lang they are also called built in functions
 * 
 * user-defined- this are functions that we create ourselves
 * 
 */

// function functionName(data) {
//     return"data";
// }
// console.log(functionName("data 1"));
// console.log(functionName("data 2"));
// console.log(functionName("data 3"));

// // function that adds to numbers
// function SumTwoNumber(numeOne,numTwo){
//     return numeOne+ numTwo
// }
// console.log(SumTwoNumber(45,50))
// console.log(SumTwoNumber(2,4))
// console.log(SumTwoNumber(1,2))



// /**
//  * @constant {number} result
//  * @param {number} numOne 
//  * @param {number} numTwo
//  * @returns {number} result
//  * 
//  * @description "this is a function to add up two numbers "
//  * 
//  * @pseudocode  
//  */
// function sum (numOne,numTwo){
//     const result=null;
//     result =numOne+numTwo;
//     return result;
// }

// const output= sum(4,6)

// console.log(output)



/** Exe 1
 * Check Even or Odd
Objective: Create a function that
 takes a number as an argument and 
 returns "Even" if the number is even,
  and "Odd" if it's odd.
 */

function checkEVenOdd(num){
    let result=null;
    result=num % 2;
    if (result==0) {
        return"even"
    }else{
       return"odd"
    }



}
const chechevenodd=checkEVenOdd(44)
console.log(chechevenodd)
/**
   * Exe 2
   * Find the Largest Number
Objective: Write a function
 that takes three numbers
  as arguments and returns
   the largest of the three.
   */

function largestNumber(numOne,NumeTwo,NumThree){
    const largest=0;
    const arr=[];
    var lastloopnum=0;

    arr[0]=numOne;
    arr[2]= NumeTwo;
    arr[3]=NumThree;

    for (let index = 0; index < array.length; index++) {
        const currentloopNum = array[index];

        if(lastloopnum<currentloopNum){
            largest=currentloopNum;
        }
        return 
    }

}
/**
    * Exe 3
    * Reverse a String
Objective: Create a function 
that takes a string and returns it reversed.
    */

/**
 * Exe 4
 * Factorial of a Number
Objective: Write a function that
 takes a number and returns its factorial
 */

/**
  * Exe 5
  * Check for Prime Number
Objective: Create a function 
that checks if a given number is a prime number.
  */

/**
 * Exer 6
 * Fibonacci Sequence
Objective: Write a function that
 generates the first n numbers
  in the Fibonacci sequence.
 */

/**
   * Exe 7
   * 
   * Convert Celsius to Fahrenheit
Objective: Create a function that
 converts a temperature from Celsius to Fahrenheit.
   */

/**
  * Exe 8
  * Check if a String is a Palindrome
Objective: Write a function that 
checks if a given
 string is a palindrome.

  */

/**
  * Exe 9
  * 
  * Count Vowels in a String
Objective: Create a function
 that counts the number of vowels
  in a given string.
  */