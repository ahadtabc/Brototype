import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });

  const [newTasks, setNewTasks] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  // Stores the tasks that already showed an overdue notification
  const notifiedTasks = useRef(new Set());

  // const transactionCount = tasks.length;

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Check for overdue tasks
  useEffect(() => {
    const checkOverdueTasks = () => {
      const currentTime = new Date();

      tasks.forEach((task, index) => {
        if (
          task.deadline &&
          !task.completed &&
          new Date(task.deadline) <= currentTime &&
          !notifiedTasks.current.has(index)
        ) {
          setToast(`Task "${task.text}" is overdue!`);

          notifiedTasks.current.add(index);

          // Hide toast after 3 seconds
          setTimeout(() => {
            setToast("");
          }, 3000);
        }
      });
    };

    // Check immediately
    checkOverdueTasks();

    // Check every 30 seconds
    const timer = setInterval(checkOverdueTasks, 30000);

    return () => {
      clearInterval(timer);
    };
  }, [tasks]);

  function InputChange(event) {
    setNewTasks(event.target.value);
    setError("");
  }

  function addTask() {
    if (newTasks.trim() === "") {
      setError("Spaces not allowed");
      return;
    }

    if (deadline === "") {
      setError("Please select a deadline");
      return;
    }

    const alreadyExists = tasks.find(
      (task) => task.text.toLowerCase() === newTasks.trim().toLowerCase(),
    );

    if (alreadyExists !== undefined) {
      setError("This Task Already Exists");
      return;
    }

    setTasks((t) => [
      ...t,
      {
        text: newTasks.trim(),
        completed: false,
        deadline: deadline,
      },
    ]);

    setNewTasks("");
    setDeadline("");
    setError("");
  }

  function editTask(index) {
    setNewTasks(tasks[index].text);
    setDeadline(tasks[index].deadline || "");
    setEditIndex(index);
    setError("");
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((__, i) => i !== index);

    setTasks(updatedTask);

    // Remove notification tracking
    notifiedTasks.current.delete(index);
  }

  function updatedTask() {
    if (newTasks.trim() === "") {
      setError("Spaces are not Allowed");
      return;
    }

    if (deadline === "") {
      setError("Please select a deadline");
      return;
    }

    const alreadyExists = tasks.find(
      (task, index) =>
        index !== editIndex &&
        task.text.toLowerCase() === newTasks.trim().toLowerCase(),
    );

    if (alreadyExists !== undefined) {
      setError("This Task Already Exists");
      return;
    }

    const updatedTasks = [...tasks];

    updatedTasks[editIndex] = {
      ...updatedTasks[editIndex],
      text: newTasks.trim(),
      deadline: deadline,
    };

    setTasks(updatedTasks);

    // Allow notification again if deadline was changed
    notifiedTasks.current.delete(editIndex);

    setNewTasks("");
    setDeadline("");
    setError("");
    setEditIndex(null);
  }

  function toggleTasks(index) {
    const updatedTasks = [...tasks];

    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };

    setTasks(updatedTasks);

    // If task is completed, remove notification tracking
    if (!updatedTasks[index].completed) {
      notifiedTasks.current.delete(index);
    }
  }

  return (
    <div className="toDoList">
      <h1>To Do List App</h1>

     {/* <h2>Transactions :{transactionCount}</h2>   */}
 
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a Task"
          value={newTasks}
          onChange={InputChange}
        />

        <input
          type="datetime-local"
          value={deadline}
          onChange={(event) => setDeadline(event.target.value)}
        />

        {editIndex === null ? (
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        ) : (
          <button className="add-button" onClick={updatedTask}>
            Update
          </button>
        )}
      </div>

      {error && <p className="error-message">{error}</p>}

      <ol>
        {tasks.map((task, index) => {
          const isOverdue =
            task.deadline &&
            new Date(task.deadline) < new Date() &&
            !task.completed;

          return (
            <li key={index} className={isOverdue ? "overdue-task" : ""}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTasks(index)}
              />

              <div className="task-content">
                <span className={task.completed ? "text completed" : "text"}>
                  {task.text}
                </span>

                <small className={isOverdue ? "deadline overdue" : "deadline"}>
                  Deadline: {new Date(task.deadline).toLocaleString()}
                </small>
              </div>

              <button className="edit-button" onClick={() => editTask(index)}>
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>

      {/* Toast Notification */}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
