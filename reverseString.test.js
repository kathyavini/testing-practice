const reverseString = require('./reverseString');

test('basic case', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('reverses strings with whitespace characters', () => {
  expect(reverseString('ab  c d')).toBe('d c  ba');
});


/* Example given on MDN on why chaining .split().reverse().join()
is not a robust method to reverse a string -- see
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

Um, however it works? Is MDN wrong about something?
*/
test('reverses grapheme clusters', () => {
  expect(reverseString('mañana mañana')).toBe('anañam anañam');
});
