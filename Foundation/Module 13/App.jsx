import { useEffect, useRef, useState } from "react";
import "./App.css";

function Todo() {
  // Load saved tasks and add IDs to older tasks if needed
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");

    if (!savedTask) {
      return [];
    }

    const parsedTasks = JSON.parse(savedTask);

    return parsedTasks.map((task) => ({
      ...task,
      id: task.id || crypto.randomUUID(),
    }));
  });

  const [newTasks, setNewTasks] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  // Store IDs of tasks that already triggered notifications
  const notifiedTasks = useRef(new Set());

  // Store the toast timeout ID
  const toastTimer = useRef(null);

  // Display a toast for 3 seconds
  function showToast(message) {
    setToast(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = setTimeout(() => {
      setToast("");
      toastTimer.current = null;
    }, 3000);
  }

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Check for overdue tasks immediately and every 30 seconds
  useEffect(() => {
    function checkOverdueTasks() {
      const currentTime = new Date();

      tasks.forEach((task) => {
        if (
          task.deadline &&
          !task.completed &&
          new Date(task.deadline) <= currentTime &&
          !notifiedTasks.current.has(task.id)
        ) {
          notifiedTasks.current.add(task.id);
          showToast(`Task "${task.text}" is overdue!`);
        }
      });
    }

    checkOverdueTasks();

    const timer = setInterval(checkOverdueTasks, 30000);

    return () => {
      clearInterval(timer);
    };
  }, [tasks]);

  // Clean up the toast timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  // Handle task input changes
  function InputChange(event) {
    setNewTasks(event.target.value);
    setError("");
  }

  // Add a new task
  function addTask() {
    const trimmedTask = newTasks.trim();

    if (trimmedTask === "") {
      setError("Empty spaces are not allowed");
      return;
    }

    if (deadline === "") {
      setError("Please select a deadline");
      return;
    }

    const alreadyExists = tasks.some(
      (task) =>
        task.text.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (alreadyExists) {
      setError("This task already exists");
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        text: trimmedTask,
        completed: false,
        deadline: deadline,
      },
    ]);

    setNewTasks("");
    setDeadline("");
    setError("");
  }

  // Load a task into the input fields for editing
  function editTask(task) {
    setNewTasks(task.text);
    setDeadline(task.deadline || "");
    setEditId(task.id);
    setError("");
  }

  // Update an existing task using its unique ID
  function updatedTask() {
    const trimmedTask = newTasks.trim();

    if (trimmedTask === "") {
      setError("Empty spaces are not allowed");
      return;
    }

    if (deadline === "") {
      setError("Please select a deadline");
      return;
    }

    const alreadyExists = tasks.some(
      (task) =>
        task.id !== editId &&
        task.text.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (alreadyExists) {
      setError("This task already exists");
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === editId
        ? {
            ...task,
            text: trimmedTask,
            deadline: deadline,
          }
        : task
    );

    setTasks(updatedTasks);

    // Allow notification again if the deadline was changed
    notifiedTasks.current.delete(editId);

    setNewTasks("");
    setDeadline("");
    setError("");
    setEditId(null);
  }

  // Delete a task using its unique ID
  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );

    notifiedTasks.current.delete(taskId);

    // Cancel editing if the edited task is deleted
    if (editId === taskId) {
      setEditId(null);
      setNewTasks("");
      setDeadline("");
      setError("");
    }
  }

  // Mark a task as completed or incomplete
  function toggleTasks(taskId) {
    const selectedTask = tasks.find(
      (task) => task.id === taskId
    );

    // Allow notification again when an overdue task
    // is changed from completed to incomplete
    if (selectedTask?.completed) {
      notifiedTasks.current.delete(taskId);
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  // Cancel the current editing operation
  function cancelEdit() {
    setEditId(null);
    setNewTasks("");
    setDeadline("");
    setError("");
  }

  return (
    <div className="toDoList">
      <h1>To Do List App</h1>

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
          onChange={(event) => {
            setDeadline(event.target.value);
            setError("");
          }}
        />

        {editId === null ? (
          <button
            className="add-button"
            onClick={addTask}
          >
            Add
          </button>
        ) : (
          <>
            <button
              className="add-button"
              onClick={updatedTask}
            >
              Update
            </button>

            <button
              type="button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </>
        )}
      </div>

      {error && (
        <p className="error-message">{error}</p>
      )}

      <ol>
        {tasks.map((task) => {
          const isOverdue =
            task.deadline &&
            new Date(task.deadline) < new Date() &&
            !task.completed;

          return (
            <li
              key={task.id}
              className={isOverdue ? "overdue-task" : ""}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTasks(task.id)}
              />

              <div className="task-content">
                <span
                  className={
                    task.completed
                      ? "text completed"
                      : "text"
                  }
                >
                  {task.text}
                </span>

                <small
                  className={
                    isOverdue
                      ? "deadline overdue"
                      : "deadline"
                  }
                >
                  Deadline:{" "}
                  {new Date(task.deadline).toLocaleString()}
                </small>
              </div>

              <button
                className="edit-button"
                onClick={() => editTask(task)}
              >
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>

      {/* Toast notification */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Todo;
