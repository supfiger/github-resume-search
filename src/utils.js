export const getPercentageFromObj = (obj) => {
  const sum = getSumFromObjectValues(obj);

  for (let key in obj) {
    const newValue = Number(((obj[key] / sum) * 100).toFixed(1));
    obj[key] = newValue;
  }

  return obj;
};

export const getSumFromObjectValues = (obj) => {
  return Object.values(obj).reduce((a, b) => a + b, 0);
};

export const getSumFromArray = (arr) => arr.reduce((acc, cur) => acc + cur);
