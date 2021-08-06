const { calculateTip } = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13); // if total does not = 13 error thrown, test failior
});

test("should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});
