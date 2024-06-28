import React from "react";

const ProductCard = (props) => {
  return (
    <div className="flex h-full flex-col items-center border border-black bg-red-300 px-3 py-5 text-center hover:rounded-lg hover:bg-red-400 hover:transition hover:ease-in-out">
      <img
        className="aspect-square w-1/2"
        src={props.image}
        alt={props.title}
      />
      <h5 className="mb-1 mt-2">{props.title}</h5>
      <h6 className="mb-2">Price: {props.price}</h6>
      <p className="text-sm">{props.description}</p>
    </div>
  );
};

export default ProductCard;
