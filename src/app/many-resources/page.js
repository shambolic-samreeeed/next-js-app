"use client";
import { React, useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [resourceType, setResourceType] = useState("users");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    return () => {
      return console.log(`resourceType: ${resourceType}`);
    };
  }, [resourceType]);

  return (
    <div>
      <button
        className="bg-blue-400 p-2 m-2"
        onClick={() => setResourceType("users")}
      >
        Users
      </button>
      <button
        className="bg-blue-400 p-2 m-2"
        onClick={() => setResourceType("posts")}
      >
        Posts
      </button>
      <button
        className="bg-blue-400 p-2 m-2"
        onClick={() => setResourceType("comments")}
      >
        Comments
      </button>
      <br />
      <ul>
        {data.map((data) => (
          <li key={data.id} className="bg-gray-300 p-5 my-2 mx-2 rounded-xl">
            <h1 className="text-xl font-bold">{resourceType === 'users' ? data.name : data.title}</h1>
            <p>{data.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
