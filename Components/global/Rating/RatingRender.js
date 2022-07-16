import { FaStar } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import HalfStar from "./HalfStar";

const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const RatingRender = ({
  rating,
  color = "text-[#F9BF00]",
  size = "text-sm",
}) => {
  rating = rating ? (rating > 5 ? 5 : rating) : 0;
  const decimal = rating % 1;
  const whole = Math.floor(rating);
  const remainder = 5 - Math.ceil(whole + decimal);
  const stars = [];

  for (let i = 0; i < whole; i++) {
    stars.push({
      type: "full",
      icon: <IoStarSharp className={cls(`${size} ${color}`)} />,
    });
  }
  if (decimal > 0) {
    stars.push({
      type: "half",
      icon: <HalfStar color={color} value={decimal} size={size} />,
    });
  }
  for (let i = 0; i < remainder; i++) {
    stars.push({
      type: "empty",
      icon: <IoStarSharp className={cls(`${size} text-gray-300`)} />,
    });
  }

  return (
    <div
      onClick={() => alert(`${whole}, ${decimal}, ${remainder}`)}
      className="flex space-x-1 items-center"
    >
      {stars.map((star, index,i) => (
        <span key={i}>{star.icon}</span>
      ))}
    </div>
  );
};

export default RatingRender;
