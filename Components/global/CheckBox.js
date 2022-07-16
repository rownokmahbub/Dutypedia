const CheckBox = ({ title, value, onChange }) => {
  return (
    <div
      onClick={onChange}
      className="flex w-max items-center gap-2 cursor-pointer"
    >
      <div className="relative">
        <div className="w-5 aspect-square rounded border-primary border relative shadow"></div>
        {value && (
          <span className="absolute top-0 -translate-y-1/3 left-0 -translate-x-[17%] w-max">
            <img className="h-10" src="/Assets/icon/rigth-mark.svg" />
          </span>
        )}
      </div>
      <span className="capitalize">{title}</span>
    </div>
  );
};

export default CheckBox;
