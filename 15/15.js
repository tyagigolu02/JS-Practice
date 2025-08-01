
//AJAX  --- Asynchronous JavaScript and XML

/* we have 3 most common ways to create and send request to server
1. XMLHttpRequest - old way of doing AJAX
   - used in older browsers
2. Fetch API - modern way of doing AJAX
   - based on Promises
3. Axios - third-party library
   - based on Promises
*/



// // XMLHttpRequest

// const URL = ".......daal do bhaiya URL yahan par.......";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload = ()=>{
//    if(status >= 200 && status < 300){
//       const data = JSON.parse(xhr.response);
//       const id = data[3].id;
//       const xhr2 = new XMLHttpRequest();
//       const URL2 = `${URL}/${id}`;
//       console.log(URL2)
//       xhr2.open("GET",URL2);
//       xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//       };
//       xhr2.send();
//    }
//    else{
//       console.log("something went wrong....");
//    }
// }

// xhr.onerror=()=>{
//    console.log("network error.....");
// }
// xhr.send();


// //second type of XHR
// // This code uses XMLHttpRequest to fetch data from a URL and handle it with Promises.

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 reject(`Error: ${xhr.status}`);
//             }
//         };
//         xhr.onerror = () => reject("Network error");
//         xhr.send();
//     });
// }

// sendRequest("GET", URL)
//     .then(data => {
//         console.log(data);
//         const id = data[3].id;
//         return sendRequest("GET", `${URL}/${id}`);
//     })
//     .then(data2 => {
//         console.log(data2);
//     })
//     .catch(error => {
//         console.error(error);
//     });


// //fetch API

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL) // return promise
//    .then((response) => {
//       if (!response.ok) {
//          throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       else{
//          return response.json(); // convert response to json
//       }
     
//    })
//    .then((data) => {
//       console.log(data);
//    })
//    .catch((error) => {
//       console.error(error);
//    });


// //fetch API with async await
// //fetch API with async await and second request

// async function fetchData() {
//     const URL = "https://jsonplaceholder.typicode.com/posts";
//     try {
//         const response = await fetch(URL);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();




