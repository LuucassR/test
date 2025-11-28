const { template } = require("@babel/core");
const { reverse } = require("node:dns/promises");
const { string } = require("yargs");

const Things = (function () {
  const capitalize = function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const reverseString = function (text) {
    textArr = text.split("");
    reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversedText += textArr[i];
    }

    return reversedText;
  };

  const calculator = (function () {
    const sum = (a, b) => {
      return a + b;
    };

    const substract = (a, b) => {
      return a - b;
    };

    const divide = (a, b) => {
      return a / b;
    };

    const multitply = (a, b) => {
      return a * b;
    };

    return { sum, substract, divide, multitply };
  })();

  const caesarCipher = (text, letterMovement) => {
    if (letterMovement < 0) return;

    letterMovement = letterMovement % 26;

    textCiphered = "";

    for (let i = 0; i < text.length; i++) {
      tempAsciTextCharacter = text.charCodeAt(i);
      if (tempAsciTextCharacter >= 65 && tempAsciTextCharacter <= 90) {
        tempAsciTextCharacter =
          ((tempAsciTextCharacter - 65 + letterMovement) % 26) + 65;
      } else if (tempAsciTextCharacter >= 97 && tempAsciTextCharacter <= 122) {
        tempAsciTextCharacter =
          ((tempAsciTextCharacter - 97 + letterMovement) % 26) + 97;
      }

      textCiphered += String.fromCharCode(tempAsciTextCharacter);
    }

    return textCiphered;
  };

  const analyzeArray = (arr) => {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];

      sum += num;

      if (num < min) min = num;
      if (num > max) max = num;
    }

    const average = sum / arr.length;
    const length = arr.length;

    return { average, min, max, length };
  };

  return { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
})();

module.exports = Things;
