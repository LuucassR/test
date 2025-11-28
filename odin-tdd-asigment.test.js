const Things = require("./odin-tdd-asigment.js");

test("Shoud return the first letter of the text capitalized", () => {
  expect(Things.capitalize("hello, how are you")).toMatch("Hello, how are you");
  expect(Things.capitalize("my name is Lucas, What's yourn name")).toMatch(
    "My name is Lucas, What's yourn name"
  );
  expect(Things.capitalize("i really like dogs")).toMatch("I really like dogs");
  expect(Things.capitalize("i love brazil")).toMatch("I love brazil");
});

test("reverse string", () => {
  expect(Things.reverseString("Hello")).toBe("olleH");
  expect(Things.reverseString("Bye")).toBe("eyB");
  expect(Things.reverseString("Me")).toBe("eM");
  expect(Things.reverseString("Good Morning")).toBe("gninroM dooG");
});

test("basic operations", () => {
  expect(Things.calculator.sum(100, 200)).toBe(300);
  expect(Things.calculator.substract(100, 200)).toBe(-100);
  expect(Things.calculator.multitply(100, 200)).toBe(20000);
  expect(Things.calculator.divide(100, 200)).toBeCloseTo(0.5);
  expect(Things.calculator.divide(100, 186)).toBeCloseTo(0.54);
});

test("caesar cipher given text", () => {
  expect(Things.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(Things.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(Things.caesarCipher("xyz", 3)).toBe("abc");
});

test("analize string for average, min, max, and length", () => {
  expect(Things.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
