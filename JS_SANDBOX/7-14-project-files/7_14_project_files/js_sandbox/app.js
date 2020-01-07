// // adding async to a function makes it return a promise
// async function myFunc(){
//   const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('Hello'), 2000);
//   });
//   const error = false;

//   if(!error){
//     const res = await promise; // wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }

// }
// myFunc()
//   .then(res => console.log(res))
//   .catch(err=> console.log(err));

async function getUsers(){
  //await response of the fetch call and only proceed once it is resolved 
  const response = await fetch ('https://jsonplaceholder.typicode.com/users')

// if resovled , proceed.  and then again only proceed once it is resolved
const data = await response.json();

// only proceed once second promise is resolved 
return data;

}
getUsers().then(users => console.log(users));