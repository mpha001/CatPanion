import { useState } from "react";
import "./ToDoList.scss";
import CheckBox from "../../assets/icons/checkbox.svg";
import CheckBoxFilled from "../../assets/icons/checkbox-filled.svg";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: Date.now(), text: "", check: false },
  ]);

  const handleCheck = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((singleTask) =>
        singleTask.id === id
          ? { ...singleTask, check: !singleTask.check }
          : singleTask
      )
    );
  };

  const handleNewToDo = (event) => {
    const uuid1 = uuidv4();
    if (event.key === "Enter") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: "", check: false },
      ]);
      console.log(uuid1);
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
                onClick={() => handleCheck(task.id)}
              />

              <input
                type="text"
                name="text"
                className="todo__input"
                value={task.text}
                onKeyDown={handleNewToDo}
                onChange={(e) =>
                  setTasks((prevTasks) =>
                    prevTasks.map((singleTask) =>
                      singleTask.id === task.id
                        ? { ...singleTask, text: e.target.value }
                        : singleTask
                    )
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
