// // console.log(this);
// var a;
// a=10;
// console.log(a);

// function fun1() {
//     console.log("Hello LPU");
// }
// fun1();
// // function get(){
// //     var a;
    
    
// //     a=10;
// //     if(true){
// //         let c = 20;
// //         console.log(c);
// //     }
// //     console.log(c);

// //     console.log("inside: ",a);
// // }
// // get();
// // console.log(a);

//Data types in js
// var a=5;
// var b=a;
// console.log("a= ",a);
// console.log("b= ",b);

// a=10;
// console.log("updated a= ",a);
// console.log("b= ",b);

// //Reference in js
// let obj1= {
//     a: 1,
//     b: 2
// };
// let obj2 = obj1;
// console.log("obj1= ",obj1);
// console.log("obj2= ",obj2);

// obj1.a = 3;
// obj1.b = 5;
// console.log("updated obj1= ",obj1);
// console.log("obj2= ",obj2);

//note : First class Function || First citizen Function
// function greet(){
//     return () => {
//         console.log("Hello");
//     };
// }
// greet();
// function x(param){
//     param();
// }
// function y(){
//     console.log("hello");
// }
// x(y);

//NOTE - Execution context
//statement - call stack works by calling 83 line (1st sattement) and pushed into the call stack by calling the web api
//then popped from stack then calls 85 line(2nd statement) and pushed into the call stack by web api then popped from stack 
//now function will be called through function execution context(FEC) and pushed into call stack
//then the function statement get executed
/* 1. Call stack is being created
   2. Global Execution Context (GEC) is created.
   3. Go to line 83 for compilation, the statement is pushed into the call stack.
   4. Since console is not a js command, it connects with webAPI to print "hello" in console in dev tools and pops from call stack.
   5. Same with the line 85
   6. Go to line 91 for compilation.
   7. Since function has local scope, Function Execution context (FEC) is created and pushed to call stack.
   8. Then step 3 to 4 is repeated with line 87.
   9. FEC gets popped.
   10. GEC gets popped.
*/


// console.log("hello");

// console.log("LPU");

// function greet(){
//     console.log("HEllo Students ");
// }

// greet();
//javascript can handle only one process(single threaded language) at atime inspite of no of cores present 
//js has a call stack in js engine that cannot do more than one process in call stack
//call stack can only handle synchronous

// web api is the main reason to make javascript asynchronous
// web api is the apis which has the acessibility of all the brower accesses
// Browser
// it is able to communicate with external server
// it has a timer(set time out)
// access of the location,display,mic, camera,speaker, bluetooth,notification,console
// it has its own local storage(like cookies)

//Note - setTimeout 
// console.log("Hello sidhu");
// setTimeout(function(){
//     console.log("Hello LPU");
// }, 1000 );
// console.log("Hello sidhish");

// for(var i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i *1000);
// }

// for(let i=1;i<=5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i *1000);
// }
// function timer(i){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
// for(var i=1;i<=5;i++){
//     timer(i);
// }

//NOTE - Callbacks
//Definition:  a callback function which is passed as an argument inside a function
//Defination: A callback is a function which is passed as an argument inside a function.

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// function greetStudent(name, callBack){
//     setTimeout(() => {
//         callBack(name);
//     },1000)
// }
// greetStudent("Sidhu",greet);

// //Groocery cart
// function createOrder(cb){
//     console.log("order created");
//     cb();
// }
// function payOrder(cb){
//     console.log("Payment Done");
//     cb();
// }
// function orderSummary(){
//     console.log("Created Order summary");
// }

// createOrder(() => payOrder(() => orderSummary()));
// //we can use above line or this (createOrder(() => payOrder(createOrderSummary));)


//Bad side of callback

/*
 1. Callback Hell
 2. Inversion of control
*/

//NOTE - Callback Hell

/*
1. User Login
2. Add items in cart
3. Create Order
4. Pay order
5. Create Order summary
6. Update wallet

*/

function login(cb) {
  console.log("User Logged in");
  cb();
}

function addItemToCart(cb) {
  console.log("Added items to cart");
  cb();
}

function createOrder(cb) {
  console.log("order creation");
  cb();
}

function payOrder(cb) {
  console.log("Payment Done..");
  cb();
}

function createOrderSummary(cb) {
  console.log("Created Order Summary");
  cb();
}

function updateWallet() {
  console.log("Update wallet");
}

login(() => addItemToCart(() => createOrder(() => payOrder(() => createOrderSummary(() => updateWallet())))));




