import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../apis/ProductApis";
import "../styles/Product.css";

export const Product = () => {
  const [img, setImg] = useState("");
  const params = useParams();
  const { id } = params;

  const { isLoading, isError, error, data } = useQuery(
    [`product`, id],
    getProduct
  );
  console.log(data);

  useEffect(() => {
    if (data) {
      setImg(data.image);
    }
  }, [data]);

  const onClickHandler = (image) => {
    setImg(image);
  };

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const { name, image, price, quantity, description, variants } = data;

  return (
    <div className="container">
      <div className="bottle-img">
        <img src={img} alt={description} />
      </div>
      <div className="bottle-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Price : <span className="price-text">$ {price}</span>
        </p>
        <p>
          {quantity === 0
            ? `Unavailable`
            : quantity > 10
            ? "Available"
            : `Selling Fast`}
        </p>
        <div className="variants-color">
          {variants.map((variant) => (
            <div
              className="button"
              style={{ backgroundColor: variant.color }}
              onClick={(e) => {
                onClickHandler(variant.image);
              }}
            ></div>
          ))}
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
