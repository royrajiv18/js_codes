const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 is resolved");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 is resolved");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 is resolved");
  }, 3000);
});

// *********It waits for all promises to resolve, if any one fails, it will throw error.******
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// [ 'p1 is resolved', 'p2 is resolved', 'p3 is resolved' ]

//****** It waits for all promises to resolve or reject, gives all responses in array. *****
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
/*[
    { status: 'fulfilled', value: 'p1 is resolved' },
    { status: 'fulfilled', value: 'p2 is resolved' },
    { status: 'fulfilled', value: 'p3 is resolved' }
  ]
*/

// ****** It waits for any one resolve promise, returns it, if all fails then it return error resonse of all in array. *****
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//p1 is resolved

// It return fastest one to get resolve or reject and returns that response
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
//p1 is resolved
