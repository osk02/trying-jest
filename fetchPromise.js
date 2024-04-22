function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("osk");
    }, 1000);
  });
}

module.exports = fetchPromise;