export const convertTableData = (data) => {
  const {
    userFullName,
    website,
    amountOfPublicRepos,
    dateProfileCreated,
    languages,
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
      columns: 3,
      get rows() {
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

  return {
    name,
    lastName,
    website,
    amountOfPublicRepos,
    date,
    languagesGrid,
  };
};
