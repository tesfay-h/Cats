let x = 10;
if(x>5){
    let y = 20;
    console.log(y);
}
console.log(x);

// scope
/* scope injavascript refers to the visibillity variables and functions with in a program.*/
/*
in javascript there are three types of scope.
1. global scope
the global scope is the outermost scope in a javascript  program. variables and functions declared in the global scope are visible from anywhere in the program.*/
var a = "hello, world";

function sample(){
    console.log(a);
}
sample();
console.log(a);

/*2. function scope,
function scope is created when a function is declared.
variables and functions declared in a function's scope are
 only visible within that function.*/
 function example(){
    var fs = "Hello GreatStack";
    console.log(fs);
 }
 example();
 
 /* 
3. block scope
Block scope in javascript refers to the visibility of variables and functions within a block of code.
A block of code is a group of statements that are enclosed 
in curly braces({}). variables and functions declared in a block's  scope are only visible within that block.
*/
function example(){
    if(true){
        let bv = "greatStack";
        console.log(bv);
    }
}
example();
// if i try to use console.log(bv ) here it gives the error message.