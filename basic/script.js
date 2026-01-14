
// if (function(){}) {
//  console.log("Runs"); // "0" is a non-empty string = truthy
// }
// else{
//     console.log(2);
// }

// let a = 3;
// a += 2;
// console.log(a);

// a -= 3;
// console.log(a);

// a *= 3;
// console.log(a);

// let age=18, hasid = true;

// if(age>17 && hasid){
//     console.log(a);
// }

// calculator
// let a = Number(prompt("enter first number:"));
// let b = Number(prompt("enter second number:"));
// let expression = Number(prompt("enter a expression:"));

// switch(expression){
//     case "+" :
//          console.log(a+b);
//           break;

//     case "-" :
//          console.log(a-b);
//          break;

//     case "*" :
//          console.log(a*b);
//          break;


//        case "/":
//         // Good practice: check for division by zero
//         if (b === 0) {
//             console.log("Error: Cannot divide by zero");
//         } else {
//             console.log(a / b);
//         }
//         break;

//     default : 
//     console.log("operation does not exist");
// }


//early return pattern 
// function checkage(age){
//     if(age<10) return "ladud";
//     return "allowed";
// };

// console.log(checkage(19));

// isloggesin = true;
// isadmin = false;

// if(isloggesin && isadmin){
//     console.log("ok");
// }


//for of
// let arr = "rajio"
// for(let char of arr){
//     if(char === "r")
//         continue;
//     console.log(char);
// }


//for each
let sum = 0;
let nums = [2,3,4,5];

nums.forEach((num) => {
    if(num%2===0)
    {
         sum = sum + num;
    }
   
    
}
)
      console.log(sum);

//for in

// let user = { name: "Harsh", age: 26 };
// for (let key in user) {
//  console.log(key, user[key]);
// }




