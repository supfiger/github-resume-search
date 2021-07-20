import { useState, useEffect } from "react";

const convertBytesToPercentage = (obj) => {
  const sumOfBytes = getSumFromObjectValues(obj);

  for (let key in obj) {
    const newValue = Number(((obj[key] / sumOfBytes) * 100).toFixed(1));
    obj[key] = newValue;
  }

  return obj;
};

const getSumFromObjectValues = (obj) => {
  return Object.values(obj).reduce((a, b) => a + b, 0);
};

export const getRepos = (url) => {
  const fetchAPI = async () => {
    const reposResponse = await fetch(url);
    return await reposResponse.json();
  };

  const result = fetchAPI();

  return result;
};

export const getLanguagesPercentage = async (arr) => {
  let result = 0;
  let reposLanguagesList = [];

  for (let i = 0; i < arr.length; i++) {
    result += getSumFromObjectValues(arr[i]);
  }

  console.log("arr:", arr);
  console.log("result:", result);

  arr.forEach(async (item) => {
    const languagesResponse = await fetch(item.languages_url);
    const languagesJson = await languagesResponse.json();
    const languagesPercentage = convertBytesToPercentage(languagesJson);

    reposLanguagesList.push(languagesPercentage);
  });

  return arr;
};

export const useFetch = ({ url, callback }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchAPI = async () => {
      const response = await fetch(url);
      const json = await response.json();
      let result = json;

      if (callback) {
        result = callback(json);
      }

      setData(result);
    };

    fetchAPI();
  }, [url, callback]);

  return { data };
};
