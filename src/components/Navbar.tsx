import { CiUser, CiShoppingCart } from "react-icons/ci";

function Navbar() {
  return (
    <div className="top-0 sticky bg-white">
      <div className="container">
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
                <a>Sign in</a>
              </div>
            </div>
            <div className="">
              <CiShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
