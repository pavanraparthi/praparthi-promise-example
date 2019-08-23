// Import stylesheets
import './style.css';
// Thanks to Techsith tutorials
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Promise Example</h1><h4>Thanks to Techsith tutorials</h4>`;

// Simple Promise Creation 
let cleanRoom = new Promise(function(resolve,reject){
  // Do your clean work
  let isCleanDone = false;//true/false
  if(isCleanDone)
    resolve('Room Cleaning Done :)');
  else 
    reject('Room Cleaning Not Done :(');  
})

cleanRoom.then(function (inputFromResolver){
  console.log(inputFromResolver);
}).catch(function (inputFromReject){
  console.log(inputFromReject);
})

// Dependency Promise 
let cleaningRoom = () => {
  return new Promise((resolve,reject) => {
    resolve('Cleaning Room Done');
  })
}

let collectGrabage = (result) => {
  return new Promise((resolve,reject) => {
    resolve(result + '\nGarbage collection done');
  })
}

let winIceCream = (result) => {
  return new Promise((resolve,reject) => {
    resolve(result + '\nNow take the icecream');
  })
}

//One Depends on the other try below code
cleaningRoom().then((result) => {
  return collectGrabage(result)
}).then((result) => {
  return winIceCream(result)
}).then((result) => {
  console.log(result);
})

// Another way of waiting to complete multiple Promise
Promise.all([cleaningRoom(),collectGrabage(), winIceCream()]).then(() =>{
  console.log('Promise all done');
});

Promise.race([cleaningRoom(),collectGrabage(), winIceCream()]).then(() => {
  console.log("This means any one promise is done");
})