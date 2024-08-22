// if
let A =20
let B=10

if(A==B){
    console.log("A is greater than B")
}


if (A==B){
    console.log("a is greater than b")
}else{

    console.log("a is not greater than b")
}



// switch case:it evakuates 

//nested 
const fredrickFruit="apple";


if (fredrickFruit== "pawpaw"){
console.log("he bought pawpaw");
}else if (fredrickFruit=="grape"){
console.log("he bought grape ")
}else if(fredrickFruit=="pinnaple"){
console.log("he bought pinnaple")
}else if(fredrickFruit=="orange"){
console.log("he bought orange");
}else{
    console.log("he bought no fruit");
}

let score= prompt("enter the students score")
if (score >= 90 ){
    console.log("Grade is A")
}else if(score >=80 && score < 90){
    console.log("Grade is B")
}else if(score >=70 && score < 80){
    console.log("Grade is C")
}else if (score >=60 && score <70){
    console.log("Grade is D")
}else if (score <60){
    console.log("Grade is F")
}
// 2
let FirstNumber =prompt("enter a number")
let SeconNumber=prompt("enter a number")
let operator= prompt("enter an operator")

if (operator == '+'){
    console.log( parseInt(FirstNumber) + parseInt(SeconNumber))
}else if (operator=='-'){
    console.log(FirstNumber-SeconNumber)
}else if (operator=='/'){
    console.log(FirstNumber/SeconNumber) 
}else if(operator=='*'){
    console.log(FirstNumber/SeconNumber)
}

let number=prompt("enter a day")
if (number == 1){
    console.log("Monday")
}else if (number== 2){
    console.log("Tuesday")
}else if (number==3){
    console.log("Wednesday")
}else if (number==4 ){
    console.log("Thursday")
}else if (number == 5){
    console.log("Friday")

}else if (number== 6){
    console.log("Saturday")                                                                                     
}else if(number== 7){
    console.log("sunday")
}

if (check){
    console.log("true block");
}