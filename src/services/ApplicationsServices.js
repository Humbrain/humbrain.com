import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const ApplicationsService = {
  getAll() {
    return axios.get(`${API_URL}/applications`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  getOne(id) {
    return axios.get(`${API_URL}/applications/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export default ApplicationsService;
