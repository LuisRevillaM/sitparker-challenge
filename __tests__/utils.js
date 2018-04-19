import utils from "../js/utils.js";

const { addTwoStrings, addSingleDigits, hasTwoDigits, lastCharacter } = utils;

test("addTwoStrings adds correctly two inputs", () => {
  expect(addTwoStrings("4562", "129837")).toBe((4562 + 129837).toString());
});

test("addTwoStrings returns a string with string inputs", () => {
  expect(typeof addTwoStrings("98", "12")).toBe("string");
});

test("addSingleDigits throws exception if any input has more than one digit", () => {
  expect(() => {
    addSingleDigits(2, 9, 23, 2);
  }).toThrow();
});

test("hasTwoDigits returns true if input has more than one digit", () => {
  expect(hasTwoDigits(-130)).toBe(true);
  expect(hasTwoDigits(19)).toBe(true);
});

test("lastCharacter returns the last character of a string", () => {
  expect(lastCharacter("2235lfdP")).toBe("P");
  expect(lastCharacter("8963547")).toBe("7");
});
