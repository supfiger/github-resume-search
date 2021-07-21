import { getPercentageFromObj } from "../../utils";

export const getRepos = async ({ repos_url, controller }) => {
  const reposResponse = await fetch(repos_url, {
    signal: controller.signal,
  });
  return await reposResponse.json();
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

export const getLanguages = async (arr) => {
  const data = await getReposLanguageList(arr);
  return getPercentageOfLanguages(data);
};
