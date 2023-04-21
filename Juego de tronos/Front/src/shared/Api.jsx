import axios from 'axios';

const API = 'http://localhost:3000';

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${API}/characters`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getHouses = async () => {
  try {
    const response = await axios.get(`${API}/houses`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getApiEndpoint = API