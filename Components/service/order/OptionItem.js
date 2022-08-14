const OptionItem = ({ item, onClick, selected,parent }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className={`sm:px-8 px-4 py-2 border dark:border-[#515150] text-sm sm:text-base rounded-lg min-w-[70] sm:min-w-[150px] cursor-pointer ${
        selected ? "bg-primary text-white" : "text-primary dark:text-white"
      }`}
    >
      <p className="text-lg"> {item.title}</p>
     <p className="text-sm dark:text-[#a5a5a5]"> {parent}</p>
     
    </div>
  );
};

export default OptionItem;
