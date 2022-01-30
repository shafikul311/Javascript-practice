
// const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // expected output: "Success!"
//   });

  const promise2 = new Promise( (resolve, reject) => {
      console.log('promise creation Ok ')
  })

  promise2.then((value) => {
      console.log(value)
  })