"use client";
import Button from "@/components/Button";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount(count - 1);
    console.log(count);
  };

  const handleIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-xl w-[20%] m-auto mt-10 p-30">
      <div className="p-5">
        <h1 className="text-9xl ">{count}</h1>
      </div>

      <div className="flex flex-row gap-4 justify-center items-center ">
        <Button
          text="Decrease"
          className="bg-red-500"
          onClick={handleDecrease}
        />
        <Button text="Reset" className="bg-gray-500" onClick={handleReset} />
        <Button
          text="Increase"
          className="bg-green-500"
          onClick={handleIncrease}
        ></Button>
      </div>
    </div>
  );
};

export default Counter;
