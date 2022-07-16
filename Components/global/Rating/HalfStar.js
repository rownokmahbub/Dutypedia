import { FaStar } from "react-icons/fa";

const HalfStar = ({ color, value, size }) => {
  const percent = Math.ceil(value * 100);
  return (
    <span className="relative overflow-hidden block">
      <FaStar className={`${color} ${size} absolute inset-0 w-full h-full`} />
      <FaStar
        className={`text-gray-300 ${size}`}
        style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
      />
    </span>
  );
};

export default HalfStar;
