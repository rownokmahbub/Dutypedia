import { getRandomInt } from "@lib/utils";
import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Counter({ from, to, toFixed = 0 }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(toFixed);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

const State = () => {
  const [from, setFrom] = useState(30);
  const [to, setTo] = useState(getRandomInt(31, 36));
  const [conFrom, setConFrom] = useState(7);
  const [conTo, setConTo] = useState(getRandomInt(8, 9));

  const States = [
    {
      name: "Total Seller",
      value: <Counter from={0} to={12} />,
      bg: "bg-[#F5EDFB]",
      icon: "/Assets/images/state/1.svg",
    },
    {
      name: "Total Order",
      value: <Counter from={0} to={120} />,
      bg: "bg-[#E8F8F0]",
      icon: "/Assets/images/state/2.svg",
    },
    {
      name: "Positive Feedback",
      value: <Counter from={0} to={70} />,
      bg: "bg-[#FEF4E5]",
      icon: "/Assets/images/state/3.svg",
    },
    {
      name: "Current Online",
      value: <Counter from={from} to={to} toFixed={2} />,
      bg: "bg-[#FEE7ED]",
      icon: "/Assets/images/state/4.svg",
    },
    {
      name: "Current Converencing",
      value: <Counter from={conFrom} to={conTo} toFixed={2} />,
      bg: "bg-[#FADDDD]",
      icon: "/Assets/images/state/5.svg",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      var variation = getRandomInt(-0.1, 0.1);
      setFrom(to);
      if (to + variation >= 30 && to + variation <= 40) {
        setTo((to) => to + variation);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [to]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var variation = getRandomInt(-0.1, 0.1);
      setConFrom(conTo);
      if (conTo + variation >= 7 && conTo + variation <= 10) {
        setConTo((conTo) => conTo + variation);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [conTo]);
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <div className="w-full bg-white p-8 rounded-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {States.map((state, idx) => (
            <div
              key={idx}
              className="flex flex-col text-center gap-2 justify-center items-center"
            >
              <div
                className={`w-16 aspect-square rounded-full flex justify-center items-center ${state.bg}`}
              >
                <img className=" scale-75" src={state.icon} />
              </div>
              <h1 className="font-black font-pop text-4xl flex whitespace-nowrap">
                {state.value}{" "}
                {state.live && <span className=" flex">.{state.live}</span>} K
              </h1>
              <p className="text-sm">{state.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default State;
