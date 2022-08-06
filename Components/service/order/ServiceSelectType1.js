const ServiceSelectType1 = ({ data }) => {
  return (
    <>
      <div className="text-center mb-8">
        <span className="border-b border-dashed capitalize px-8 pb-2">
          {data.category}
        </span>
      </div>
      <div className="flex flex-wrap gap-4">
        {data.options?.selectedOptions?.map((item, index) => (
          <span
            className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px]`}
          >
            # {item.title}
          </span>
        ))}

        {data.options?.customOptions?.map((item, index) => (
          <span
            className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px]`}
          >
            # {item.title}
          </span>
        ))}
      </div>
    </>
  );
};

export default ServiceSelectType1;
