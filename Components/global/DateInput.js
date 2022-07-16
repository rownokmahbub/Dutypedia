import DatePicker from "react-datepicker";

const DateInput = ({
  minDate = new Date(),
  selected = new Date(),
  ...props
}) => {
  return (
    <div>
      <label className="flex items-center relative w-max">
        <DatePicker
          className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 w-36 md:w-40"
          selected={selected}
          minDate={minDate}
          {...props}
        />
        <span className="bg-primary text-white absolute right-0 h-full w-10 flex justify-center items-center text-xl rounded-r-md">
          <img className=" scale-90" src="/Assets/icon/calendar.svg" />
        </span>
      </label>
    </div>
  );
};

export default DateInput;
