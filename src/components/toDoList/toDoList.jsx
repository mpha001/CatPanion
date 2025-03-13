import "./toDoList.scss";
import CheckBox from "../../assets/icons/checkbox.svg";
import CheckBoxFilled from "../../assets/icons/checkbox-filled.svg";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import debounce from "debounce";

function ToDoList() {
  const base_URL = import.meta.env.VITE_API_URL;
  const params = useParams();
  const [tasks, setTasks] = useState([""]);

  const getTodo = async () => {
    try {
      const response = await axios.get(`${base_URL}/${params.user_id}`);
      setTasks(response.data.todolist);
    } catch (error) {
      console.log("Error fetching to-do list", error);
    }
  };

  const saveTodo = useCallback(
    debounce(async (updatedTodo) => {
      try {
        await axios.put(`${base_URL}/${params.user_id}`, {
          todolist: JSON.stringify(updatedTodo),
        });
      } catch (error) {
        console.log("Error saving to-do list", error);
      }
    }, 8000),
    [tasks]
  );

  useEffect(() => {
    getTodo(params.user_id);
    for (let i = 0; i < tasks.length; i++) {
      let newTasks = tasks.splice(i, 1, {
        id: i,
        text: tasks[i],
        check: false,
      });
      setTasks(newTasks);
    }
  }, [params.user_id]);

  const toggleCheckBox = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((singleTask) =>
        singleTask.id === id
          ? { ...singleTask, check: !singleTask.check }
          : singleTask
      )
    );
  };

  const handleInputChange = (id, value) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, text: value } : task
      );
      saveTodo(updatedTasks);

      return updatedTasks;
    });
  };

  const handleNewToDo = (event) => {
    if (event.key === "Enter") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: "", check: false },
      ]);
    }
  };

  return (
    <div>
      <div className="todo">
        <h2 className="todo__heading">To Do:</h2>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={task.id} className="todo-list__item">
              <img
                className="todo__icon"
                src={task.check ? CheckBoxFilled : CheckBox}
                alt="checkbox icon"
                onClick={() => toggleCheckBox(task.id)}
              />

              <input
                type="text"
                name="text"
                className="todo__input"
                value={typeof task.text === "string" ? task.text : task}
                onKeyDown={handleNewToDo}
                onChange={(e) => handleInputChange(task.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ToDoList;
