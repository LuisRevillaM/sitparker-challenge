import add from "../js/add.js";

test("adds multiple inputs correctly", () => {
  expect(add("3034", "9", "493", "175672")).toBe(
    (3034 + 9 + 493 + 175672).toString()
  );
});

test("handles negative inputs correctly", () => {
  expect(add("10", "-3004", "5783", "23", "-27")).toBe(
    (10 - 3004 + 5783 + 23 - 27).toString()
  );
});

test("addition is commutative", () => {
  expect(add("9650", "3547")).toBeDefined();
  expect(add("9650", "3547")).toEqual(add("3547", "9650"));
});

test("returns a string if inputs are strings", () => {
  expect(typeof add("3", "9")).toBe("string");
});
