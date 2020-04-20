import axios from "axios";

export default {
  getNewReleases() {
    return axios
      .get("api/users?page=2")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};
