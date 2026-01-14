  //closures- ek function jo return kare ek aur function aur return hone waala function hmesha use krega parent function ka koi variable.
  function myfun() {
    let y = 4;
    return function(){
        console.log(y);
    }
}
myfun()();

//pure function- aisa function jo ki bahar ki value ko naa badle wo hai pure function.

let a=12;
function ab(){
    console.log("hi");
}
ab();
//impure function- aisa function jo ki bahar ki value ko change kr de.

let b = 3;
function cd(){
    b++;
    console.log(b);
}
cd();

//lexical scopint

function abcd(){
    let x = 12;
    function defg(){
        let y = 53;
        function ay(){
            let m = 5;
        }
    }

}

//immediately invoked function expression - Function ko brackets me band karo → turant call karo

(function(){
    console.log("hi");
})();