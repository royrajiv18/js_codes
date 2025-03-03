// CALL

const student1 = {
  name: "Rajiv",
  printName: function () {
    console.log(this.name);
  },
};

student1.printName();
// Rajiv

const student2 = {
  name: "Rohit",
};

student1.printName.call(student2);
// Rohit

// **************************************

const printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

const name1 = {
  firstName: "Ashish",
  lastName: "Paul",
};

const name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(name1, "hyderabad", "telangana");
printFullName.call(name2, "mumbai", "maharashtra");

//Ashish Paul from hyderabad telangana
//Sachin Tendulkar from mumbai maharashtra

// **************************************

// APPLY

const printFullName1 = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

const name3 = {
  firstName: "Rahul",
  lastName: "Dravid",
};
const name4 = {
  firstName: "Saurav",
  lastName: "Ganguly",
};

printFullName1.apply(name3, ["Bengaluru", "Karnataka"]);
printFullName1.apply(name4, ["Kolkata", "west bengal"]);

//Rahul Dravid from Bengaluru Karnataka
// Saurav Ganguly from Kolkata west bengal

// **************************************

// BIND

const printFullName2 = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " " + state
  );
};

const name5 = {
  firstName: "Rahul",
  lastName: "Dravid",
};

const printName = printFullName2.bind(name5, "Bengaluru", "Karnataka");

printName();

// Rahul Dravid from Bengaluru Karnataka

/* IMP points - 
call( ) method is used to invoke a method directly by passing a reference which points to “this” variable inside the method.
apply( ) Method is the same as the call method; it takes a second argument as an array list of the parameter.
bind( ) method will not invoke a method directly but it gives a copy of the exactly same method which can be invoked.
*/
