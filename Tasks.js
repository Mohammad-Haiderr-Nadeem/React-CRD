import React, { useEffect, useState } from "react";
import styles from "./Tasks.module.css";
import ListOfTasks from "./ListOfTasks";
import axios from "axios";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [myDate, setMyDate] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    addTask();
    e.preventDefault();
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/myTasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async () => {
    if (task && myDate) {
      try {
        const response = await axios.post("http://localhost:4000/myTasks", {
          id: setCount(count + 1),
          text: task,
          date: myDate,
        });
        console.log(response.data);
        setTasks([...tasks, response.data]);
        console.log("Tasks: ", tasks);
        console.log("Tasks id: ", tasks.id);
        setTask("");
        setMyDate("");
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const deleteTask = async (index) => {
    try {
      await axios.delete(`http://localhost:4000/myTasks/${index}`);
      const updatedTasks = tasks.filter((i) => i !== index);
      setTasks(updatedTasks);
      setCount(count - 1);
      getTaskList();
    } catch (error) {
      console.log("index", index);
      console.error("Error deleting task:", error);
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <h1>Task Tracker</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Task">
            <b>Task</b>
            <br></br>
            <input
              type="text"
              name="task"
              placeholder="write your task here..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
          </label>
          <br></br>
          <label htmlFor="Date">
            <b>Day & Time</b>
            <br></br>
            <input
              type="date"
              name="myDate"
              placeholder="Please select your date.."
              value={myDate}
              onChange={(e) => setMyDate(e.target.value)}
            ></input>
          </label>
          <br></br>
          <button type="submit" className={styles.mySubmitButton}>
            Save Task
          </button>
          <br></br>
          <br></br>
          <ListOfTasks tasks={tasks} deleteTask={deleteTask}></ListOfTasks>
        </form>
      </div>
    </main>
  );
}
