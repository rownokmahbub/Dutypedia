const OptionItem = ({ item, onClick, selected }) => {
  return (
    <span
      onClick={() => onClick(item)}
      className={`sm:px-8 px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] cursor-pointer ${
        selected ? "bg-primary text-white" : "text-primary"
      }`}
    >
      # {item.title}
    </span>
  );
};

export default OptionItem;
