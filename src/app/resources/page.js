"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div>
      <ul>
        {data.map((data) => (
          <li key={data.id} className="bg-grey p-10 my-2">
            {data.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
