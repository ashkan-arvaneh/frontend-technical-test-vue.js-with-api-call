import axios from "axios";

export default {
  getpersonsModule() {
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
