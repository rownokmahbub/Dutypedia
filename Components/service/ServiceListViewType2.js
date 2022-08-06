import { Colors } from "./ServiceListView";

const ServiceListViewType2 = ({ data }) => {
  return (
    <>
      {data.options.map((rootItem, index) => (
        <>
          <div className="text-center mb-4">
            <span className="border-b font-semibold text-gray-600 border-dashed capitalize px-8 pb-2">
              {rootItem.title}
            </span>
          </div>
          {rootItem.multiple ? (
            rootItem.multiFormData.map((multipleItem, index) => (
              <div>
                <span className="text-gray-500 text-sm">
                  {multipleItem.title} :{" "}
                </span>
                <div className="flex flex-wrap gap-4 mb-8 mt-2">
                  {multipleItem.selectedOptions?.map((item, index) => (
                    <span
                      className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                        Colors[index % Colors.length]
                      }`}
                    >
                      # {item.title}
                    </span>
                  ))}

                  {multipleItem.customOptions?.map((item, index) => (
                    <span
                      className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                        Colors[index % Colors.length]
                      }`}
                    >
                      # {item.title}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-wrap gap-4 mb-8">
              {rootItem.selectedOptions?.map((item, index) => (
                <span
                  className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                    Colors[index % Colors.length]
                  }`}
                >
                  # {item.title}
                </span>
              ))}

              {rootItem.customOptions?.map((item, index) => (
                <span
                  className={`sm:px-8 text-primary px-4 py-2 border-2 text-sm sm:text-base rounded-full min-w-[70] sm:min-w-[150px] ${
                    Colors[index % Colors.length]
                  }`}
                >
                  # {item.title}
                </span>
              ))}
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default ServiceListViewType2;
