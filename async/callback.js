//A callback function is a function passed into another function as an argument, which is then invoked inside the 
//outer function to complete some kind of routine or action.

// let order = (call_production) =>{

//     console.log("Order placed. Please call production")
    
//     // function 👇 is being called 
//       call_production();
//     };
    
//     let production = () =>{
    
//     console.log("Production has started")
    
//     };


function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  console.log(name)
  callback(name);
}

processUserInput(greeting);
