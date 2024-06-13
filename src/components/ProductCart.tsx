import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
interface PropsType {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}
function ProductCart({ id, title, img, price, quantity }: PropsType) {
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img src={img} alt="" className="inline-block" />
      </div>
    </div>
  );
}

export default ProductCart;
