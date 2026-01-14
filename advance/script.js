//lexical scoping - function apne variables un jagahon se access krta hai jahan wo code me likha gaya hota hai, na ki jaha se usse call kiya gya ho
// scope compile time (code likhte waqt)






// variable search rule(scope chain)
// javascript variable ko is order me dhoondhta hai: current function scope, parent(outer) function scope, global scope, nahi mila -> referenceerror , isi chain ko lexical scope chain bolte hai 


// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();

//c inner me mil gya, b outer se mila, a mera global se mila, kyuki inner() ke andar likha gya hai



let a = "global";

function one() {
  let b = "one";

  function two() {
    let c = "two";

    function three() {
      console.log(a, b, c);
    }

    three();
  }

  two();
}

one();





//dyanmic scoping - kaha se call kr rhe ho uspe depend krega ki kya value milegi, js follow nhi krti

// let a = 12;

// function abcd() {
//     console.log(a);
// }

// function cde() {
//     let a = 10;
//     abcd();

// }

// cde();


