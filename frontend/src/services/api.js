import axios from "axios";

const API = async (endpointObject, payload) => {
  const API_URL = `http://localhost:8000${endpointObject?.endpoint}`;

  await axios({
    method: endpointObject?.method,
    url: API_URL,
    data: payload,
  });
};

export default API;
