import "./ToDoList.scss";
import CheckBox from "../../assets/icons/checkbox.svg";
import CheckBoxFilled from "../../assets/icons/checkbox-filled.svg";

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  const base_URL = import.meta.env.VITE_API_URL;
  const params = useParams();

  const [tasks, setTasks] = useState([""]);
  const getTodo = async () => {
    try {
      const response = await axios.get(`${base_URL}/${params.user_id}`);
      console.log(response.data.todolist);

      setTasks(response.data.todolist);
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  };

  useEffect(() => {
    getTodo(params.user_id);
    for (let i = 0; i < tasks.length; i++) {
      let newTasks = tasks.splice(i, 1, { id: i, text: tasks[i], check: false });
      setTasks(newTasks);
    }
  }, [params.user_id]);

  console.log(tasks);
  const handleCheck = id => {
    setTasks(prevTasks => prevTasks.map(singleTask => (singleTask.id === id ? { ...singleTask, check: !singleTask.check } : singleTask)));
  };

  const handleNewToDo = event => {
    const uuid1 = uuidv4();
    if (event.key === "Enter") {
      setTasks(prevTasks => [...prevTasks, { id: Date.now(), text: "", check: false }]);
      console.log(uuid1);
    }
  };

  // const spliceArray = (e, id) => {
  //   let newTasks = tasks.splice(id, 1, { id: id, text: e.target.value, check: false });
  //   setTasks(newTasks);
  // };

  return (
    <div>
      <div className='todo'>
        <h2 className='todo__heading'>To Do:</h2>
        <ul className='todo-list'>
          {tasks.map((task, index) => (
            <li key={task.id} className='todo-list__item'>
              <img
                className='todo__icon'
                src={task.check ? CheckBoxFilled : CheckBox}
                alt='checkbox icon'
                onClick={() => handleCheck(task.id)}
              />

              <input
                type='text'
                name='text'
                className='todo__input'
                value={typeof task.text === "string" ? task.text : task}
                onKeyDown={handleNewToDo}
                onChange={e =>
                  setTasks(prevTasks =>
                    prevTasks.map(singleTask => (singleTask.id === task.id ? { ...singleTask, text: e.target.value } : singleTask))
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
