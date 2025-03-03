//same origin policy -  protocol, host and port should be same

localStorage.setItem("hello", "world");

localStorage.setItem("hello1", "world");

localStorage.getItem("hello1");

localStorage.removeItem("hello1"); // remove key value pair

localStorage.clear(); // clears all

// storing object in localStorage

const user = {
  name: "Rajiv",
  age: 30,
};

localStorage.setItem("userInfo", JSON.stringify(user));

JSON.parse(localStorage.getItem("userInfo"));
