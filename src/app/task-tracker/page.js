"use client";
import React, { useState } from "react";

const page = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    console.log(newTask);
    const newTaskObj = {
      id: tasks.length + 1,
      title: newTask,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1> Task Tracker </h1>
      <input
        type="text"
        className="bg-gray-200 m-2"
        placeholder="Enter Your Text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <h1>{newTask}</h1>
      <button className="bg-red-800 p-2 text-white" onClick={createTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
