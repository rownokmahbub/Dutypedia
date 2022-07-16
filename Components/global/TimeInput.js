import DatePicker from "react-datepicker";
const TimeInput = ({
  minDate = new Date(),
  selected = new Date(),
  ...props
}) => {
  return (
    <div className="">
      <label className="flex items-center relative w-max">
        <DatePicker
          className="border border-primary focus:outline-primary rounded-md px-2 py-1.5 w-28 md:w-32"
          selected={selected}
          minDate={minDate}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          {...props}
        />
        <span className="bg-primary text-white absolute right-0 h-full w-10 flex justify-center items-center text-xl rounded-r-md">
          <img className=" scale-90" src="/Assets/icon/clock.svg" />
        </span>
      </label>
    </div>
  );
};

export default TimeInput;
