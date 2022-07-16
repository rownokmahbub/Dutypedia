import { Colors } from "./AddGigPackage";

const PricingCard = ({ pkg, index }) => {
  return (
    <div
      className={`w-full p-4 shadow-lg rounded-md relative ${
        Colors.Shadows[index % Colors.Shadows.length]
      }`}
    >
      <div
        className={`${
          Colors.Gradients[index % Colors.Gradients.length]
        } text-white text-center px-4 py-2 rounded-md !h-max`}
      >
        {pkg.name}
      </div>
      <h1 className="py-8 text-4xl font-medium text-center">
        {pkg.price}
        <span className="text-base">৳</span>
      </h1>
      <div className="text-center space-y-2">
        {pkg.features.map((feature, index) => (
          <p
            className={`text-sm ${
              feature.isAvailable ? "" : "line-through text-gray-400"
            }`}
          >
            {feature.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
