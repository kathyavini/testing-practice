function reverseString(string) {
    // First pass. Now that tests pass let's try something different
    // let newString = '';
    // for (i = string.length - 1; i >= 0; i--) {
    //     newString += string[i]
    // }

    // Example that MDN said shouldn't work (but it does!)
    // let stringArray = string.split('');
    // let reversedArray = stringArray.reverse();
    // let newString = reversedArray.join('');

    // For fun
    let stringArray = [...string];
    let reversedArray = stringArray.reverse()
    let newString = reversedArray.reduce((reversed, char) => {
        return reversed + char
    }, '')

  return newString
}

module.exports = reverseString;
