export const convertTableData = (data) => {
  const {
    userFullName,
    website,
    amountOfPublicRepos,
    dateProfileCreated,
    languages,
    repos,
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
        const fieldKeys = ["updated_at", "url", "name"];
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
