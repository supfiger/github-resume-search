export const searchUser = async ({ controller, username, history }) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
    });
    const json = await response.json();

    history.push({
      pathname: `/${username}`,
      state: { userData: json },
    });
  } catch (error) {
    console.error(error);
  }
};
