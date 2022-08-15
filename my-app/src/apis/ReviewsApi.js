import axios from "axios";

export const getProductReviews = async ({ queryKey }) => {
  console.log("triggered", queryKey[1]);
  const { data } = await axios.get(
    `http://localhost:5000/api/review/${queryKey[1]}`
  );
  console.log("product :", data);
  return data;
};

export const addProductReview = ({ id: productId, review }) => {
  const data = axios.post(
    `http://localhost:5000/api/review/${productId}`,
    review
  );
  return data;
};
