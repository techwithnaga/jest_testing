const isPalindrome = require("./isPalindrome");

test("Tacocat return true", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});

test("Dave return true", () => {
  expect(isPalindrome("dave")).toBe(false);
});
