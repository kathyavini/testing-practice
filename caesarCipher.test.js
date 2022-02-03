const caesarCipher = require('./caesarCipher');

test('Given example', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('Wrap from z to a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('Keep same case', () => {
  expect(caesarCipher('Hello You', 5)).toBe('Mjqqt Dtz');
});

test('Preserve Punctuation', () => {
  expect(caesarCipher('Hello, You!', 5)).toBe('Mjqqt, Dtz!');
});

test('Preserve Numbers', () => {
    expect(caesarCipher('Hello 2 You 2!', 5)).toBe('Mjqqt 2 Dtz 2!');
  });
