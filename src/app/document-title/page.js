"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("this is from use effect");
    document.title = `Count :${count}`;
  },[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default page;
