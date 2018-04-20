import utils from "../js/utils.js";

const {
  addTwoStrings,
  addSingleDigits,
  hasTwoDigits,
  lastCharacter,
  signsDiffer,
  subtractTwoStrings
} = utils;

test("subtractTwoStrings works with inputs of different sign", () => {
  expect(subtractTwoStrings("-90", "10")).toBe("-80");
  expect(subtractTwoStrings("-90", "15067")).toBe((15067 - 90).toString());
  expect(subtractTwoStrings("90", "-1500067")).toBe((90 - 1500067).toString());
});

test("addTwoStrings adds correctly two inputs", () => {
  expect(addTwoStrings("4562", "129837")).toBe((4562 + 129837).toString());
});

test("addTwoStrings returns a string with string inputs", () => {
  expect(typeof addTwoStrings("98", "12")).toBe("string");
});

test("addTwoStrings returns a negative number if inputs are negative", () => {
  let sum = addTwoStrings("-78", "-36", true);
  expect(sum[0]).toBe("-");
  expect(sum).toBe((-78 - 36).toString());
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

test("signsDiffer works", () => {
  expect(signsDiffer("-90", "0")).toBe(true);
  expect(signsDiffer("-90", "-0")).toBe(true);
  expect(signsDiffer("90", "-0")).toBe(false);
});
