import add from "../add.js";

test("returns a string if inputs are strings", () => {
  expect(typeof add("3", "9")).toBe("string");
});

test("adds numbers correctly", () => {
  expect(add("3034", "9", "493")).toEqual((3034 + 9 + 493).toString());
});

test("addition is commutative", () => {
  expect(add("9650", "3546")).toBeDefined();
  expect(add("9650", "3546")).toEqual(add("3546", "9650"));
});
