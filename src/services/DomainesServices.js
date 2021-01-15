import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const DomainesService = {
  getAll() {
    return axios.get(`${API_URL}/domaines`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  getOne(id) {
    return axios.get(`${API_URL}/domains/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  getOneByApp(id) {
    return axios.get(`${API_URL}/domains/application/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  getCountByApp(id) {
    return axios.get(`${API_URL}/domains/application/${id}/count`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  update(domaine, id) {
    return axios.put(`${API_URL}/domains/${id}`, domaine, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  create(domaine) {
    return axios.post(`${API_URL}/domains`, domaine, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  delete(id) {
    return axios.delete(`${API_URL}/domains/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

export default DomainesService;
