import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdDiscount } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import FeatureCard from "./FeatureCard";

function Services() {
  const data = [
    {
      icon: <CiDeliveryTruck className="text-4xl" />,
      title: "Free Shipping",
      description: "Free shipping on all orders",
    },
    {
      icon: <GiReturnArrow className="text-4xl" />,
      title: "30 Days Return",
      description: "Easy 30 days return policy",
    },
    {
      icon: <MdDiscount className="text-4xl" />,
      title: "Discount",
      description: "Discount on every purchase",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      title: "24/7 Support",
      description: "Support on every purchase",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className=" container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
