export const fetchUserData = ({ controller, username, setLoading }) => {
  setLoading(true);

  return fetch(`https://api.github.com/users/${username}`, {
    signal: controller.signal,
  })
    .then((data) => data.json())
    .then((data) => {
      console.log("data:", data);
      return data;
    })
    .catch((error) => console.error(error))
    .finally(setLoading(false));
};
