import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const instace = axios.create({
  baseURL: BASE_URL,
});

export const post = async (endpoint, body) => {
  const { data } = await instace.post(endpoint, body);
  return data;
};

export default instace;
