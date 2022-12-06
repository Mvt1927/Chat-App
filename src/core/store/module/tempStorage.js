
function createPromise(getValue, callback) {
  return new Promise((resolve, reject) => {
    try {
      const value = getValue();
      callback === null || callback === void 0 ? void 0 : callback(null, value);
      resolve(value);
    } catch (err) {
      callback === null || callback === void 0 ? void 0 : callback(err);
      reject(err);
    }
  });
}

const TempStorage = () => {
  return {
    /**
     * Fetches `key` value.
     */
    getItem: (key, callback) => {
      return createPromise(() => window.localStorage.getItem(key), callback);
    },

    /**
     * Sets `value` for `key`.
     */
    setItem: (key, value, callback) => {
      return createPromise(() => window.localStorage.setItem(key, value), callback);
    },

    /**
     * Removes a `key`
     */
    removeItem: (key, callback) => {
      return createPromise(() => window.localStorage.removeItem(key), callback);
    },
  }
}
export default TempStorage()