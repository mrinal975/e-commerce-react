import React from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
interface PropsType {
  id: number;
  title: string;
  category: string;
  img: string;
  price: number;
  quantity: number;
}
function ProductCart({ id, title, category, img, price, quantity }: PropsType) {
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200 ">
        <img src={img} alt="" className="inline-block " />
      </div>
      <div className="px-8 py-4">
        <div className="flex justify-center items-center gap-x-8">
          <p className="text-gray-500 text-sm font-medium">{category}</p>
          <h2>{title}</h2>
        </div>
        <div className="mt-3 flex items-center justify-between  w-[85%]">
          <div className="flex items-center text-[#ffb21d]">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="text-gray-600 text-sm ml-2">(3 Review)</p>
          </div>
          <div className="">
            <h2 className=" font-medium text-sky-500"> ${price}</h2>
          </div>
        </div>
        <div className="flex w-full gap-x-3 justify-center rounded-lg item-center bg-sky-500 text-white mt-4 px-4 py-2 cursor-pointer hover:bg-sky-600">
          <AiOutlineShoppingCart className="text-2xl" />
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
