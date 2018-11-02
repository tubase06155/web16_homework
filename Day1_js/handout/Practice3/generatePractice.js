'use strict'

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function generate(testLengthArray) {
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  var result = [];
  if (testLengthArray.testLengthArray < 4) {

    testLengthArray.forEach((item, index) => {
      var object = {};
      object.input = [];
      for (let i = 0; i < item; i++) {
        object.input.push(getRandomNumber(-10000, 10000));

      }
      object.target = object.input[getRandomNumber(0, item)];
      object.output = object.input.indexOf(object.target);
      result.push(object);
    });
  } else {
    testLengthArray.forEach((item, index) => {
      var object = {};
      object.input = [];
      for (let i = 0; i < item; i++) {
        object.input.push(getRandomNumber(-10000, 10000));

      }
      //  object.target = object.input[getRandomNumber(0, item)];
      switch (index) {
        case 0:
          object.target = 22222;
          break;
        case 1:
          object.target = object.input[0];

          break;
        case 2:
          object.target = object.input[item - 1];
          break;
        case 3:
          object.target = getRandomNumber(1, item - 2);
          break;
        default:
          object.target = getRandomNumber(0, item - 1);
          break;
      }
      object.output = object.input.indexOf(object.target);
      result.push(object);
    });
  }
  return result;
}

module.exports = generate