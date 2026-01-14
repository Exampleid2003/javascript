function lolo(){
    console.log("hi");
}
lolo();



let fnc = function() {
    console.log("hello");
}
fnc();


let fun = ()=> {
    console.log("wow");
}
fun();



function print(v1){
    console.log(`${v1} is a good boy`);
}
print("rahul");
print("arjun");
print("anna");


function add(v1,v2){
    console.log(v1+v2);
}
add(2,3);
add(4,5);
add(3,9);


function substract(v1=0,v2=0){
    console.log(v1-v2);
}
substract();




function abc(a,b,c,...val){
    console.log(a,b,c,val);
}
abc(1,2,3,4,5,6,7);




function abcd(a,b){
    return a+b;
}
 let result = abcd(1,2);
 console.log(result);



let value = function() {
    console.log("hi");
}
value();



function ab(val){
    val();
}

ab(function(){
    console.log("where");
})