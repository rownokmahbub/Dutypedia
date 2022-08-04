import React from "react";
import search from "/public/Assets/icon/search.svg";
import add from "/public/Assets/icon/roundedplus.svg";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Wrapper } from "../../../styles/Scrollbar";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@lib/authContext";
import axios from "axios";
import { GlobalContext } from "@lib/globalContext";
import LoadingScreen from "@components/global/LoadingScreen";
import NewExpenseModal from "./NewExpenseModal";
import toast from "react-hot-toast";

const ExpensesList = () => {
  const [showNewExpense, setShowNewExpense] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const { token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { useUi, uiDispatch } = useContext(GlobalContext);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [mode, setMode] = useState(null);

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.amount.toString().includes(searchTerm.toLowerCase()) ||
      expense.date.toString().includes(searchTerm.toLowerCase())
    );
  });

  const handelDelete = async (id) => {
    const userAction = confirm(`Are you sure you want to delete this?`);
    if (userAction) {
      const Request = async () => {
        try {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/expenses/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          uiDispatch({ type: "DO_REFRESH" });
          return "Successfully done!";
        } catch (error) {
          console.log(error);
          throw new Error(error.response?.data?.msg);
        }
      };
      toast.promise(Request(), {
        loading: <b>Please wait...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);
  }

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/expenses/get`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExpenses(data.expenses);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExpenses();
  }, [useUi.refresh]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  return (
    <>
      {expenses.length > 0 ? (
        <div className="py-4">
          <div className="flex justify-between items-center flex-wrap ">
            <div className="flex gap-4 items-center pb-5 md:pb-0">
              <p>Filtered By</p>
              <select>
                <option value="">All</option>
              </select>
            </div>

            <div className="relative text-gray-600 md:w-72 w-full pb-5 md:pb-0">
              <input
                className=" h-10 px-5 pl-4 pr-8 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white dark:bg-bg-300 dark:border-[#515150]"
                type="search"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-2 top-3 cursor-pointer">
                <Image src={search} width={18} height={18} alt="search" />
              </div>
            </div>
            <div
              onClick={() => {
                setMode("new");
                setShowNewExpense(true);
              }}
              className="flex gap-1 items-center cursor-pointer"
            >
              <p>Add Expenses</p>
              <Image src={add} width={28} height={28} alt="search" />
            </div>
          </div>

          <div className="grid grid-cols-3 mx-[13px] -mr-[1px] mt-6 md:mx-3 md:mr-[22px] text-center bg-primary py-4  text-white text-xl rounded-t-md sticky top-0 z-10">
            <p className="text-[16px] md:text-xl"> Date</p>
            <p className="text-[16px] md:text-xl"> Name Of Expenses</p>
            <p className="text-[16px] md:text-xl">Amount</p>
          </div>
          <Wrapper className="pl-3">
            <div className="routine-table-body-section md:pr-3">
              {filteredExpenses.map((item, i) => (
                <div className="grid grid-cols-3 divide-x dark:divide-[#515150] border dark:border-[#515150] border-b  px-2 py-2">
                  <p className="items-center flex justify-center text-[16px] md:text-xl text-[#666666] dark:text-white">
                    {item.date}
                  </p>
                  <p className="items-center flex text-center text-[16px] md:text-xl px-2 text-[#666666] dark:text-white">
                    {item.title}
                  </p>

                  <p className="items-center flex justify-end text-[16px] md:text-xl">
                    <div className="flex items-center justify-end">
                      <p className="items-center text-[16px]  md:text-2xl text-[#666666] md:-ml-8 dark:text-white">
                        {item.amount}
                      </p>

                      <Menu as="div" className=" relative md:ml-16">
                        <Menu.Button>
                          <Image
                            src="/Assets/icon/dothor.svg"
                            className=""
                            width={30}
                            height={25}
                            alt="calender"
                          />
                        </Menu.Button>
                        <Menu.Items className=" flex flex-col items-center absolute -ml-20 -mt-10 bg-white shadow-3xl  rounded-md px-3 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {
                                  setMode("edit");
                                  setSelectedExpense(item);
                                  setShowNewExpense(true);
                                }}
                                className={`${
                                  active
                                    ? "bg-gray-200 text-black "
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-[4px]  px-2 text-sm text-center cursor-pointer`}
                              >
                                <p className="text-sm">Edit</p>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => handelDelete(item.id)}
                                className={`${
                                  active
                                    ? "bg-primary-300 text-white"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-[4px] px-2 text-sm cursor-pointer`}
                              >
                                <p className="text-sm">Delete</p>
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </p>
                </div>
              ))}
            </div>
          </Wrapper>

          <div className=" mt-24 sticky bottom-0 md:relative">
            <div className="flex absolute right-2 text-xl bottom-0  gap-48 bg-primary px-6 py-3 md:py-4 rounded-md text-white">
              <p>Total:</p>
              <p className="">{calculateTotal(filteredExpenses)} ৳</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-16">
          <a
            onClick={() => {
              setMode("new");
              setShowNewExpense(true);
            }}
            className="flex flex-col justify-center cursor-pointer"
          >
            <Image
              src="/Assets/icon/plus.svg"
              width={100}
              height={100}
              alt="calender"
            />
            <p className="text-center  md:text-2xl mt-5 ">Create New Expense</p>
          </a>
        </div>
      )}

      <NewExpenseModal
        isOpen={showNewExpense}
        closeModal={() => setShowNewExpense(false)}
        expense={selectedExpense}
        mode={mode}
      />
    </>
  );
};

export default ExpensesList;
