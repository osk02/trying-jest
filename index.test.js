const sum = require("./index");
// test("adds 1 + 2 to return 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("String test case", () => {
  var str = "Hello";
  expect(str).toMatch("Hello");
});

test("Null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy(); // n is null, 0, false then true
});

test("One is truthy", () => {
  const n = 1;
  expect(n).toBeTruthy(); // n is 1
});

test("throws on invalid input", () => {
  expect(() => {
    sum('1');
  }).toThrow();
});
