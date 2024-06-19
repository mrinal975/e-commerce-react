import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
function Cart({ setOpenCart }: any) {
  const products = useAppSelector((store) => store.cart);
  const getTotal = () => {
    let total = 0;
    products.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <div
      className="fixed left-0 top-0 z-20 overflow-y-scroll bg-[#000007d]
     w-full min-h-screen"
    >
      <div
        className="max-w-[400px] w-full min-h-full bg-white absolute
      right-0 top-0 p-6"
      >
        <RxCross1
          onClick={() => setOpenCart(false)}
          className="absolute right-0 top-0 text-2xl cursor-pointer"
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600">Your Cart</h3>
        <div>
          {products?.map((item: any) => (
            <CartProduct
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div
          className="flex justify-between items-center 
        font-medium text-xl py-4"
        >
          <p>Total</p>
          <p>${getTotal()}</p>
        </div>
        <div>
          <button
            className="bg-sky-500 text-white rounded-md
          px-6 py-3 hover:bg-sky-600 transition-all duration-200
          text-center w-full "
          >
            View Cart
          </button>
          <button
            className="bg-sky-500 text-white rounded-md
          px-6 py-3 hover:bg-sky-600 transition-all duration-200
          text-center w-full "
          >
            Check Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
