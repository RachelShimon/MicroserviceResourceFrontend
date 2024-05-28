import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getMicroservices = async () => {
  const response = await axios.get(`${API_BASE_URL}/microservices`);
  return response.data;
};

export const getResources = async () => {
  const response = await axios.get(`${API_BASE_URL}/resources`);
  return response.data;
};
