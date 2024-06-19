import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeProduct } from "../redux/slice/cartSlice";

interface PropsType {
  id: number;
  title: string;
  category: string;
  img: string;
  price: number;
  quantity: number;
}
function CartProduct({ id, title, category, img, price, quantity }: PropsType) {
  const dispatch = useAppDispatch();
  const newPrice = Math.ceil(price * 0.9);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={img} alt="" className="h-[80px]" />
        <div className="space-y-2">
          <h2 className="font-medium">{title}</h2>
          <p className="text-gray-600 text-sm">{quantity * newPrice}</p>
        </div>
      </div>
      <RxCross1
        onClick={() => dispatch(removeProduct(id))}
        className="cursor-pointer"
      />
    </div>
  );
}

export default CartProduct;
