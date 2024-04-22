const fetchData = require("./fetchData");
// testing callback
test("the data is osk", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("osk");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
