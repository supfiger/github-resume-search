export const fetchUserData = ({ controller, username, setLoading }) => {
  setLoading(true);

  return fetch(`https://api.github.com/users/${username}`, {
    signal: controller.signal,
  })
    .then((data) => data.json())
    .catch((error) => console.error(error))
    .finally(setLoading(false));
};
