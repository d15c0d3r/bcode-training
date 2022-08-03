import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { addProductReview } from "../apis/ReviewsApi";
import "../styles/ReviewForm.css";
import { errorSelector } from "recoil";

export const ReviewForm = ({ id, setRefetch }) => {
  const { isLoading, isSuccess, isError, error, mutate } = useMutation(
    ({ id, review }) => addProductReview({ id, review })
  );

  useEffect(() => {
    if (isSuccess) setRefetch(isSuccess);
    return () => {};
  }, [isSuccess, setRefetch]);

  const formik = useFormik({
    initialValues: { name: "", review: "", rating: "" },
    onSubmit: (values) => {
      console.log(values);
      console.log(id);
      mutate({
        id,
        review: {
          name: values.name,
          review: values.review,
          rating: values.rating,
        },
      });
    },
  });
  if (isLoading) {
    return <h2>Posting data..</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="review-form-container">
      <h1 className="review-form-header">Review Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="review-input-set">
          <label htmlFor="name" className="review-form-label" />
          <input
            className="review-form-input"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="review-input-set">
          <label htmlFor="review" className="review-form-label" />
          <input
            className="review-form-input"
            id="review"
            name="review"
            type="text"
            placeholder="Review"
            required
            onChange={formik.handleChange}
            value={formik.values.review}
          />
        </div>
        <div className="review-input-set">
          <label htmlFor="rating" className="review-form-label" />
          <input
            className="review-form-input"
            id="rating"
            name="rating"
            type="number"
            placeholder="Rating"
            required
            onChange={formik.handleChange}
            value={formik.values.rating}
          />
        </div>
        <button className="review-form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
