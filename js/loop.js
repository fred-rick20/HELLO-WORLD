// for(initialization; condition; counter{increment or decreament }){
//     statement
// }
//i=i+1
// //for loop
// for(let i= 0 ; i<10; i++) {
//     // statemnet
//     console.log(i)

// }

// //while loop

// let i=0
// while (i< 10) {
//     console.log(i);
//     i++;
// }

// // DO while loop
// let j=0;
// do {
//   console.log(j);
//    j++ 
// } while (j >10);



//excercise 1
let sum =0
for( let number=1; number <=100;number++){
    sum+=number
    
}
console.log(sum)




//excerise 2
let positiveNUM= prompt("input a positive  number")
positiveNUM=parseInt(positiveNUM)
let factorial=1
while (positiveNUM > 1) {
    factorial*= positiveNUM;
  positiveNUM--;

    
}
console.log(factorial)
//excercise 3
let inputstring= prompt("input a string")
let reversedString=""
for(let i= inputstring.length -1; i>=0; i--){
    reversedString+=inputstring[i]
}
console.log(reversedString)