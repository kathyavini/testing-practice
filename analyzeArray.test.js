import analyzeArray from './analyzeArray';

test('Given example', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Trivial case', () => {
  expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});

test('Zero and negatives', () => {
    expect(analyzeArray([-5, 8, 0, -4, 1])).toEqual({
      average: 0,
      min: -5,
      max: 8,
      length: 5,
    });
  });


  test('Repeating values', () => {
    expect(analyzeArray([-15, -15, 0, -4, -4])).toEqual({
      average: -7.6,
      min: -15,
      max: 0,
      length: 5,
    });
  });

