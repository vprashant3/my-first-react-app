
// Function statement or Function Declaration
function a() {
    console.log("a called");
}
a();

// Function expression
var b = function() {
    console.log("b called");
}
b();

// Anonymous function


//Named function expression

var c = function cNamed() {
    console.log('c named function expression called')
}
c();

//parameters vs arguments

var d = function(param) {
    console.log("argument is passed, parameter is consumed");
}
d("arg");


// first class functions-- the ability to use functions as argruments is called first class functions

var e = function() {
    console.log('function passed as argument');
}

function firstClass(param) {
    console.log('in firstClass');
    param();
}
firstClass(e);

