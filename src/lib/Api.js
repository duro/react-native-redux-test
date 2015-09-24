export default {

  getRepos(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then(res => res.json());
  },

  getBio(username) {
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
            .then(res => res.json())
            .then(json => {
              if (json.message === "Not Found") {
                throw new Error("Not Found");
              }

              return json;
            });
  }

}
