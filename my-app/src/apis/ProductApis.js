import axios from "axios";

export const getAllProducts = async () => {
  const { data } = await axios.get(`http://localhost:5000/api/products/`);
  return data;
};

export const getProduct = async ({ queryKey }) => {
  const { data } = await axios.get(
    `http://localhost:5000/api/products/${queryKey[1]}`
  );
  return data;
};
