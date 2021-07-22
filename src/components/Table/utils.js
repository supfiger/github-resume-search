import React from "react";

import { getPercentageFromObj } from "../../utils";

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

  const name = (userFullName && userFullName.split(" ")[0]) || "";
  const lastName = (userFullName && userFullName.split(" ")[1]) || "";
  const date = new Date(dateProfileCreated).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let languagesGrid;
  if (languages) {
    languagesGrid = {
      get columns() {
        if (width < 700) return 1;
        return 3;
      },
      get rows() {
        if (languages.length < this.columns) return 1;
        return Math.round(languages.length / this.columns);
      },
      get arrayOfColumns() {
        return [...Array(this.columns).keys()];
      },
      get arrayOfRows() {
        return [...Array(this.rows).keys()];
      },
      getCurrentLanguage(row, col) {
        return languages[row * this.columns + col];
      },
    };
  }

  let lastEditedRepos;
  if (repos) {
    lastEditedRepos = repos
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
  }

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
  let reposLanguagesList = [];

  for (const item of repos) {
    await fetch(item.languages_url, { signal: controller.signal })
      .then((data) => data.json())
      .then((data) => getPercentageFromObj(data))
      .then((data) => reposLanguagesList.push(data));
  }

  return reposLanguagesList;
};

const getPercentageOfLanguages = (arr) => {
  let languages = {};

  // get sum of each language
  languages = arr.reduce((obj, item) => {
    const langKey = Object.keys(item)[0];
    const prevLangValue = obj[langKey] || 0;
    const langValue = Math.round(prevLangValue + item[langKey]);

    if (langKey) {
      return { ...obj, [langKey]: langValue };
    } else {
      return { ...obj };
    }
  }, {});

  // get percentage of each language
  languages = getPercentageFromObj(languages);

  // return array of objects
  return Object.keys(languages).map((item) => ({ [item]: languages[item] }));
};

export const getRepos = ({ repos_url, controller }) => {
  return fetch(repos_url, {
    signal: controller.signal,
  }).then((data) => data.json());
};

export const getLanguages = ({ repos, controller }) => {
  return getReposLanguageList({ repos, controller }).then((data) =>
    getPercentageOfLanguages(data)
  );
};
