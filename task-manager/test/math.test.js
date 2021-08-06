const { calculateTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13); // if total does not = 13 error thrown, test failior
});

test("should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("should convert 32 F to 0 C", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("should convert 0 C to 32 F", () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});

// for async code we pass done in params
// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done(); //  then we pass done at the end of the async code block
//   }, 2000);
// });

test("should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(11, 22);
  expect(sum).toBe(32);
});
