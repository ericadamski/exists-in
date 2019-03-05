module.exports = function existsIn(key, value, fallback = false) {
  const keys = key.split(".");
  let index = 0;
  let current = value;

  while (index < keys.length) {
    if (!(current = current[keys[index++]])) {
      return fallback;
    }
  }

  return current;
};
