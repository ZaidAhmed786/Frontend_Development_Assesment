import React from "react";
import "./card.css";
import cardhearticon from "../../assets/CardItems/icon _heart_.png";
import { Link } from "react-router-dom";

const Card = ({title, price, imgSrc, category , onAddToCart , onAddToDelete }) => {
  return (
    <div className="w-full max-w-sm card">
      <Link className="flex justify-center align-center" href="#">
        <img
          className="p-8 rounded-t-lg w-full h-auto"
          src={imgSrc} 
          alt="productimage"
        />
      </Link>
      <div className="flex text-center">
        <button
          onClick={onAddToCart}
          className="card-button-1 inline-flex items-center px-2 py-5"
        >
          ADD TO CART
        </button>
        <Link href="#" className="card-button-2 px-2 py-5">
          QUICK VIEW
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-around mt-2.5 mb-5">
          <h4 className="card-tittle">{title}</h4>
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <img className="img-fluid" src={cardhearticon} alt="" />
            <h4 className="card-price">{price}</h4>
          </div>
        </div>
      </div>
      <hr className="card-line" />
      <div className="pb-5">
        <div className="flex items-center justify-around mt-2.5 mb-5">
          <h4 className="card-footer-txt">{category}</h4>
          {/* Rating stars code */}
        </div>
      </div>
    </div>
  );
};

export default Card;
