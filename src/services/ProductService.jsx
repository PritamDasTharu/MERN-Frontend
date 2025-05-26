import axios from "axios";

// const API_URL = import.meta.env.REACT_APP_API_URL;
const API_URL = `http://localhost:9000/product`;

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/productget`);
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/productdeletebyid/${id}`);
};
