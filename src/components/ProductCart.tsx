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
  return <div></div>;
}

export default ProductCart;
