// //time out 
// console.log("food is oderd");
// setTimeout(() =>{
//     console.log("time to eat");
// },2000);
// console.log("food deleverd");

// function orderFood(food, callback) {
//     console.log(`Ordering ${food}...`);
//     setTimeout(() => {
//         console.log(`${food} is ready!`);
//         callback(); // Call the callback function after the operation
//     }, 2000); // Simulating a 2-second delay
// }

// // Callback function
// function eatFood() {
//     console.log("Time to eat!");
// }

// // Calling the function
// orderFood("Pizza", eatFood);


function orderfood(food, callback) {
    console.log(`ordering ${food}...`);
    setTimeout(() =>{
        console.log(`${food} is ready!`);
        callback();
    },3000)
}

function eatfood() {
    console.log("time to eat");
}

<<<<<<< HEAD
orderfood("pizza", eatfood)
=======
orderfood("pizza", eatfood)


hello

