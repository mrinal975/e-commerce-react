import { title } from "process";
import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.jpeg";
import img5 from "../assets/img/5.jpeg";
import img6 from "../assets/img/6.jpeg";
import img7 from "../assets/img/7.jpeg";
import img8 from "../assets/img/8.jpeg";
import img9 from "../assets/img/9.jpeg";
import img10 from "../assets/img/10.jpeg";
import img11 from "../assets/img/11.jpeg";
import img12 from "../assets/img/12.jpeg";
import ProductCart from "./ProductCart";
function Products() {
  const data = [
    {
      id: 1,
      title: "Product 1",
      img: img1,
      price: 100,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 2,
      title: "Product 2",
      img: img2,
      price: 200,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 3,
      title: "Product 3",
      img: img3,
      price: 300,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 4,
      title: "Product 4",
      img: img4,
      price: 400,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 5,
      title: "Product 5",
      img: img5,
      price: 500,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 6,
      title: "Product 6",
      img: img6,
      price: 600,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 7,
      title: "Product 7",
      img: img7,
      price: 700,
      category: "Phone",
      quantity: 1,
    },

    {
      id: 9,
      title: "Product 9",
      img: img9,
      price: 600,
      category: "Phone",
      quantity: 1,
    },
    {
      id: 10,
      title: "Product 10",
      img: img10,
      price: 500,
      category: "Phone",
      quantity: 5,
    },
    {
      id: 11,
      title: "Product 11",
      img: img11,
      price: 900,
      category: "Phone",
      quantity: 3,
    },
    {
      id: 12,
      title: "Product 12",
      img: img12,
      price: 900,
      category: "Phone",
      quantity: 10,
    },
  ];
  return (
    <div className="container mt-32 mx-auto px-4">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="">Featured</div>
          <div className="">Top Seller</div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 mt-8">
        {data.map((item, index) => (
          <ProductCart
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
