export const convertNumbersToPercentage = (obj) => {
  const newObj = { ...obj };
  const sum = getSumFromObjectValues(newObj);

  for (let key in obj) {
    const newValue = Number(((newObj[key] / sum) * 100).toFixed(1));
    newObj[key] = newValue;
  }

  return newObj;
};

export const getSumFromObjectValues = (obj) => {
  return Object.values(obj).reduce((a, b) => a + b, 0);
};

export const getSumFromArray = (arr) => arr.reduce((acc, cur) => acc + cur);
