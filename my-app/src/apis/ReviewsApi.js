import axios from "axios";

export const getProductReviews = async ({ queryKey }) => {
  console.log("useQuery is called");
  const { data } = await axios.get(
    `https://obscure-refuge-62167.herokuapp.com/products/${queryKey[1]}/reviews`
  );
  return data;
};

export const addProductReview = async ({ id: productId, review }) => {
  const data = await axios.post(
    `https://obscure-refuge-62167.herokuapp.com/products/${productId}/reviews`,
    review
  );
  return data;
};
