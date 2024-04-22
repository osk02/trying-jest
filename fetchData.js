function fetchData(callback) {
  setTimeout(() => {
    callback("osk");
  }, 1000);
}

module.exports = fetchData;
