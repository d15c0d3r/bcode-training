import axios from "axios";
export const herokuDomain = `https://ecommerce-server-training.herokuapp.com`;
export const localDomain = `http://localhost:5000`;

export const getAllProducts = async () => {
  const { data } = await axios.get(`${localDomain}/api/products/`);
  return data;
};

export const getProduct = async ({ queryKey }) => {
  const { data } = await axios.get(
    `${localDomain}/api/products/${queryKey[1]}`
  );
  console.log(data);
  return data;
};
