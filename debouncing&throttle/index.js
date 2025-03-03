let counter = 0;
function getData() {
  console.log("fetching Data" + counter++);
}
function myDebounce(fn, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}

const betterFunction = myDebounce(getData, 1000);
