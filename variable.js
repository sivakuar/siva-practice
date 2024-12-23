 //How to write js code :

//Variable => container to store values

///Syntax : [Formulae]
//variable_type variable_name = value
//console.log(variable_name);

//Variable types :

//var

// var a = 10 // var can both redeclare and reassifn
// var a = 5
// console.log(a);

// var a = 10  // var can reassign
//     a = 5
// console.log(a);

//let => let can only reassign, it does not support redeclare
// let a = 10
//     a = 5
//const => const does not support both redeclare and reassign
 


// data type:

// primitive data type 
   // string  - "" or ''
   //var str = "happy","1235"

     //number - 12345 or 23.3

     //Boolean - true or false
  
     // 

// non primitive data type 
  // array: []
// var arr = ["hi",3,null,true]
// console.log(arr);


// console.log(arr[2]); // index

// length starts with - 1
//index starts with - 0

 
//object: {} - collection of key and value pairs 

//   var id ={
//     name : "hari",
//     age : 20,
//     dep : "Bsc"
//   }

// console.log(id);


//function - block of code 

//function statement or declaration
// sysntax : 
// function var_name(){

//}

//example 
// function box(){
// console.log("b")
// console.log("siva")

// }

// box()
//parameter - it act as a variable_name 
//arguements - is like a value 
 
// function box2(x){ // parameter 

//     console.log(x)

// }
// box2(100) // argument

//return 
// function box3(y){
//     return y
// }

// console.log(box3("sivakumar"))

//task : 
//10[argument] + 10[argument] = 20 


//function expression

// function box4(x,y){

//     console.log(x+y)
// }
//    box4(20,20)

//function expression
   
// var bigbox = function smallbox(){
//     console.log("kumar")
// }
// bigbox()

// var bigbox = function (){ // anonymous function 
//     console.log("kumar")
// }
    //immediate invoke function exppression [IIFE] 

//     (function(x){
//         console.log(x);
//     })(10)

//    var store = (function(x){   // if variable name is given it could be called any where 
//         console.log(x);
//     })(10)

    //arrow function : short hand syntax
    //syntax :
    // ()=>{}

        // var arr = ()=>{console.log("hello barath")}
        // arr()

//operaters :
//arithmetic operater
// + add, - sub,*mul,/ div, %modulus,**exponent [power of value] , increment ++, decrement -- 


//Assignment operater

// var an =10
// an += 5  //15
// console.log(an);

//Logical operater
// && => and 
// || => or 
//  | => not

// var a = 10
// var b = 5
// console.log(a!=b);

//Comparision operater  < lessthan , > greaterthan , <= lessthanoreaquel , >= greaterthanoreaqual
// var num1 = 10
// var num2 = 30

// console.log(num1>num2);

//Equality operater   == double equals 
// var de = 10 
// var de2 = 10
// console.log(de==de2);



//Ternary operater
//syntax:
//(condition) ? "statement_true" : "statement_false"

// var limt = 20

// var limit = (AggregateError>=18 && age<=70) ? "he is eligible to vote" : "he is not eligible to vote"

// console.log(limit)

//LOOP: program will continuously execute untill the condition met.

//types of loop =>  for loop, while loop, do while loop ,
// forloop 
//syntax:  
// for (initalization ; condition ; iteration [increment ++ , decrement --] ){
                  //code
//}

for(var i = 0 ; i<5 ; i++ ){
console.log(i);
}
//steps
//step1 -> i -0 -> 0<5[true] => print : 0 =>0++ => 0+1 = 1
//step2=->i=1-> k5[true] m>print : 1 -> 1++-> 1+1 - 2
//step 3 -> i -2 => 2<5[true] => print : 2 => 24+=> 2+1 " 3
//step 4 => i = 3 => 3<5[true] => print : 3 => 3++ -> 3+1 = 4
//step 5 => i = 4 -> 4<5[true] => print : 4 => 4++ => 4+1=5
//step6 => i = 5 => 5<5[false] // loop will stop


for(var i = 5 ; i>0 ; i-- ){
    console.log(i);
    }

// string : 
var str = "happy"
     for (var i = 0 ; i<str.length ; i++){
        console.log(str[i]);
     }


var str = "sivakumar"
   for (var i = 0 ; i)

