import React from "react";

import { convertNumbersToPercentage } from "../../utils";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState(null);

  React.useEffect(() => {
    const setSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    setSize();
    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  }, []);

  return windowSize;
};

export const convertTableData = (data) => {
  const {
    userFullName,
    website,
    amountOfPublicRepos,
    dateProfileCreated,
    languages,
    repos,
    width,
  } = data;

  const createLanguagesGrid = () => {
    return {
      get columnsAmount() {
        if (width < 700) return 1;
        return 3;
      },
      get rowsAmount() {
        if (languages.length < this.columnsAmount) return 1;
        return Math.ceil(languages.length / this.columnsAmount);
      },
      get arrayOfColumns() {
        return [...Array(this.columnsAmount).keys()];
      },
      get arrayOfRows() {
        return [...Array(this.rowsAmount).keys()];
      },
      getCurrentLanguage(row, col) {
        return languages[row * this.columnsAmount + col];
      },
    };
  };

  const getLastEditedRepos = () => {
    return repos
      .map((item) => {
        const fieldKeys = ["updated_at", "svn_url", "name"];
        return fieldKeys.reduce(
          (prev, curr) => ({ ...prev, [curr]: item[curr] }),
          {}
        );
      })
      .map((item) => ({ ...item, updated_at: new Date(item["updated_at"]) }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  };

  const name = (userFullName && userFullName.split(" ")[0]) || "";
  const lastName = (userFullName && userFullName.split(" ")[1]) || "";
  const date = new Date(dateProfileCreated).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const languagesGrid = languages && createLanguagesGrid();
  const lastEditedRepos = repos && getLastEditedRepos();

  return {
    name,
    lastName,
    website,
    amountOfPublicRepos,
    date,
    languagesGrid,
    lastEditedRepos,
  };
};

const getReposLanguageList = async ({ repos, controller }) => {
  const urls = repos.map((item) => item.languages_url);
  const request = urls.map((item) =>
    fetch(item, { signal: controller.signal })
      .then((data) => data.json())
      .then((data) => convertNumbersToPercentage(data))
  );

  return await Promise.all(request);
};

const getPercentageOfLanguages = (arr) => {
  // get sum of each language
  const sumOfEachLanguages = arr.reduce((obj, item) => {
    const langKeys = Object.keys(item);
    const newObj = { ...obj };

    langKeys.forEach((currentKey) => {
      const prevLangValue = newObj[currentKey] || 0;
      const langValue = Math.round(prevLangValue + item[currentKey]);
      newObj[currentKey] = langValue;
    });

    return { ...newObj };
  }, {});

  // get percentage of each language
  const percentageOfEachLanguages =
    convertNumbersToPercentage(sumOfEachLanguages);

  // array of objects
  const percentage = Object.keys(percentageOfEachLanguages).map((item) => ({
    [item]: percentageOfEachLanguages[item],
  }));

  return percentage;
};

export const getRepos = async ({ repos_url, controller }) => {
  const response = await fetch(repos_url, {
    signal: controller.signal,
  });
  return await response.json();
};

export const getLanguages = async ({ repos, controller }) => {
  const response = await getReposLanguageList({ repos, controller });
  return getPercentageOfLanguages(response);
};
