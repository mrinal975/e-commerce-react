import { CiUser, CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div className="top-0 sticky bg-white">
      <div className="container mt-4">
        <div className=" flex justify-between items-center">
          <h1 className="font-bold text-4xl">Shopping</h1>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex items-center gap-3 hidden">
              <div
                className="rounded-full border-2 border-gray-300 text-gray-500 
              text-3xl w-12 h-12 flex justify-center items-center cursor-pointer "
              >
                <CiUser />
              </div>
              <div className="">
                <a href="#" className="text-gray-500">
                  Sign in
                </a>
              </div>
            </div>
            <div className="text-gray-500 text-3xl relative cursor-pointer">
              <CiShoppingCart />
              <div className="absolute -top-3 -right-2 bg-red-500 rounded-full text-white text-sm w-5 h-5 flex justify-center items-center">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 pt-4"></div>
    </div>
  );
}

export default Navbar;
