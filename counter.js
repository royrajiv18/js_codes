// counter

function counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new counter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
