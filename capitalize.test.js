const capitalize = require('./capitalize');

test('Basic case', () => {
  expect(capitalize('human')).toBe('Human');
});

test('First letter already capitalized', () => {
  expect(capitalize('Human')).toBe('Human');
});

test('Other letters capitalized', () => {
  expect(capitalize('hTTheh')).toBe('HTTheh');
});

// Oh, I didn't expect this one to actually pass
test('Takes non-english letters', () => {
  expect(capitalize('\u03C0')).toBe('\u03A0');
})

test('Ignores leading numbers', () => {
  expect(capitalize('9hello')).toBe('9hello');
})
