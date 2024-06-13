// Import necessary modules
import React from "react";

// Define the props interface
interface FeatureCardProps {
  icon: React.ReactElement; // Ensure the type matches the type of icon you're passing
  title: string;
  desc: string;
}

// Define the FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="flex gap-2 bg-gray-200 px-4 py-6">
      {icon}
      <div className="">
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
