import React from "react";
const ProductCard = (props) => {
  return (
    <div className="flex w-full flex-col items-center border border-black bg-red-300 px-3 py-5 text-center hover:rounded-lg hover:bg-red-400 hover:transition hover:ease-in-out">
      <img className="aspect-square w-1/6" src={props.image} alt="" />
      <h5 className="">{props.title}</h5>
      <h6 className="">price: {props.price}</h6>
      <p className="">{props.description}</p>
    </div>
  );
};

export default ProductCard;
