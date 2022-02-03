function analyzeArray(testArray) {
  const length = testArray.length;

  let sum = 0;
  let min = testArray[0];
  let max = min;

  testArray.forEach((item) => {
    sum += item;

    if (item < min) {
      min = item;
    }

    if (item > max) {
      max = item;
    }
  });

  const average = sum / length;

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
