import React from "react";
import styles from "./ListOfTasks.module.css";

export default function ListOfTasks(props) {
  return (
    <main>
      {props.tasks.length && (
        <div>
          <ol type="none">
            {props.tasks.map((task, index) => (
              <li key={index}>
                <div className={styles.container}>
                  <button
                    onClick={() => props.deleteTask(props.tasks[index].id)}
                  >
                    X
                  </button>

                  <h1>{task.text}</h1>
                  <p>{task.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </main>
  );
}
