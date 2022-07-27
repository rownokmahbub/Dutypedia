import Accordion from "@components/global/Accordion";
import { Days } from "./SelectService";
import moment from "moment";

const CalendarView = ({ workingTime, t47 }) => {
  return (
    <>
      <div className="shadow-3xl hidden sm:block h-max bg-white dark:bg-bg-300 rounded-xl overflow-hidden p-4">
        <p className="text-center capitalize dark:text-white">company calender</p>
        <div className="mt-4">
          <div className="flex justify-around border-b pb-2 mb-2 dark:text-white">
            <p>Day</p>
            <p>Working Time</p>
          </div>
          {t47 ? (
            Days.map((day) => (
              <div className="grid grid-cols-2 mb-3">
                <div className="flex gap-2 items-center dark:text-white">
                  <img
                    className="w-10"
                    src="/Assets/images/service/red_calender.svg"
                    alt=""
                  />
                  <p className="text-sm">{day}</p>
                </div>
                <div className="flex gap-2 items-center text-center justify-center dark:text-white">
                  <img
                    className="w-5"
                    src="/Assets/icon/color-clock.svg"
                    alt=""
                  />
                  <p className="text-sm">24/7</p>
                </div>
              </div>
            ))
          ) : (
            <>
              {workingTime.map((item) => (
                <div className="grid grid-cols-2 mb-3">
                  <div className="flex gap-2 items-center dark:text-white">
                    <img
                      className="w-10"
                      src="/Assets/images/service/red_calender.svg"
                      alt=""
                    />
                    <p className="text-sm">{item.day}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-5"
                      src="/Assets/icon/color-clock.svg"
                      alt=""
                    />
                    <p className="text-sm">
                      {moment(item.open, ["HH:mm"]).format("h:mm A")} -{" "}
                      {moment(item.close, ["HH:mm"]).format("h:mm A")}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div className="block sm:hidden">
        <Accordion
          title={
            <div className="flex gap-2 items-center">
              <img src="/Assets/icon/calendar.svg" className=" scale-90" />
              <span className="text-base capitalize dark:text-white">company calender</span>
            </div>
          }
          contentBg="bg-white dark:bg-bg-300"
          titlePadding="px-4 py-3"
          color="bg-gradient-to-b from-[#566D26] to-[#A74260] text-white"
        >
          <div className="py-2 dark:bg-bg-300">
            <div>
              <div className="flex justify-between px-8 border-b pb-2 mb-2 dark:text-white">
                <p>Day</p>
                <p>Working Time</p>
              </div>
              {t47 ? (
                Days.map((day) => (
                  <div className="grid grid-cols-2 mb-3">
                    <div className="flex gap-2 items-center dark:text-white">
                      <img
                        className="w-10"
                        src="/Assets/images/service/red_calender.svg"
                        alt=""
                      />
                      <p className="text-sm dark:text-white">{day}</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        className="w-5"
                        src="/Assets/icon/color-clock.svg"
                        alt=""
                      />
                      <p className="text-sm dark:text-white">24/7</p>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {workingTime.map((item) => (
                    <div className="grid grid-cols-2 mb-3">
                      <div className="flex gap-2 items-center dark:text-white">
                        <img
                          className="w-10"
                          src="/Assets/images/service/red_calender.svg"
                          alt=""
                        />
                        <p className="text-sm">{item.day}</p>
                      </div>
                      <div className="flex gap-2 items-center justify-center dark:text-white">
                        <img
                          className="w-5"
                          src="/Assets/icon/color-clock.svg"
                          alt=""
                        />
                        <p className="text-sm">
                          {moment(item.open, ["HH:mm"]).format("h:mm A")} -{" "}
                          {moment(item.close, ["HH:mm"]).format("h:mm A")}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default CalendarView;
