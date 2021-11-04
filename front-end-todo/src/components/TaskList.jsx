import { useEffect, useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  });

  return (
    <div>
      {tasks && tasks.map((task) => <Task key={task._id} task={task} />)}
    </div>
  );
};

export default TaskList;
