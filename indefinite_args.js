say("My")("Name")("is")("Rajiv")();
sum(10)(20)(30)(40)();

function sum(num) {
  return function (nextArg) {
    if (nextArg) {
      return sum(num + nextArg);
    } else {
      console.log(num);
    }
  };
}

function say(firstWord) {
  return function (nextWord) {
    if (nextWord) {
      return say(firstWord + " " + nextWord);
    } else {
      console.log(firstWord);
    }
  };
}
