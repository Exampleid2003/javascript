
// lela();

// let lela = function(){
//     console.log("hello");
// }

// let multiply = (a,b) =>{
//   return a*b
// };
// multiply(1,2);


// function demo(a,b,c){
// console.log(a,b,c);
// }
// demo(1,2);


let func = function(...scores){
    let total = 0;
    scores.forEach(function (score)  {
         total = total + score;
    });

    return total;
}

console.log(func(1,2,3,4,5,6,7,8,9,1));

// let checkAge = function(age){
//     if(age>18)  return "too young";
//     return "allowed for marriage";
// }
// console.log(checkAge(23));

// let fun1 = function(){
//     return;
// }
// console.log(fun1());

// let abcd = function(value){
//     value();
// }



// abcd(function(){
//     console.log("hi");
// })


//higher order function
// let a = function(fun){
//     fun();
// }

// a(function(){
//     console.log("hii");
// });

// let year = function(value){
//   return function(){
//     console.log("happy new year brohter");
//   }
// }

// let predict = year(2025);
// predict();

//closure

// function loan(){
//     let a = 4;
//     return function(){
//         a++;
//         console.log(a);
//     };
// }

// const increment = loan();
// increment();
// increment();
// increment();

// (function init(){
//   console.log("initialzed");
// })();