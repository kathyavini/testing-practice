export default function caesarCipher(string, shift) {
  //   let cipher = '';
  const stringArray = [...string];

  //   for (const char of stringArray) {
  //     if (isLetter(char)) {
  //       cipher += shiftLetter(char, shift);
  //     } else {
  //       cipher += char;
  //     }
  //   }

  // Practice with reduce again
  const cipher = stringArray.reduce((str, char) => {
    if (isLetter(char)) {
      return (str += shiftLetter(char, shift));
    } else {
      return (str += char);
    }
  }, '');

  return cipher;
}

function isLetter(character) {
  if (character.match(/[A-Za-z]/)) {
    return true;
  }
  return false;
}

function casedAlphabet(character) {
  if (lowerCaseAlphabet.includes(character)) {
    return lowerCaseAlphabet;
  } else {
    return upperCaseAlphabet;
  }
}

function shiftLetter(character, shift) {
  const position = casedAlphabet(character).indexOf(character);
  const newPosition = (position + shift) % 26;
  return casedAlphabet(character)[newPosition];
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const lowerCaseAlphabet = [...alphabet];
const upperCaseAlphabet = [...alphabet.toUpperCase()];
