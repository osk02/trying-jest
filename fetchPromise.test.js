const fetchPromise = require("./fetchPromise");

// test("the data is osk (from fetchPromise.js)", () => {
//   return expect(fetchPromise()).resolves.toBe("osk");
// });

// test("the test fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("the data is osk", async () => {
  const data = await fetchPromise();
  expect(data).toBe("osk");
});
