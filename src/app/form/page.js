"use client";

import { useState } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("")

  const updateText = () => {
    setText(event.target.value);
  };

  const updateEmail = () =>{
    setEmail(event.target.value);
  }
  return (
    <div>
      <div className="flex flex-col w-90 h-40 px-3 m-auto justify-center mt-30 shadow-2xl rounded-sm">
        <h1 className="text-xl font-bold mb-4"> Input Form</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={text}
          onChange={updateText}
          className="border-1 border-gray-300 mb-2"
        ></input>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={updateEmail}
          className="border-1 border-gray-300 "
        ></input>
        <div className="text-center">
        {text && (<p>Name: {text}</p>)}
        {email && (<p>Email: {email}</p>)}
        </div>
      </div>
    </div>
  );
};

export default page;
