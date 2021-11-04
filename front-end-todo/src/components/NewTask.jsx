import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 0;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
  }
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
`;

const NewTask = () => {
  const [newTask, setNewTask] = useState();
  const addToTaskList = () => {
    fetch(`http://localhost:3001/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: newTask,
      }),
    });
    setNewTask('');
  };
  console.log(newTask);
  return (
    <Container>
      <input
        type='text'
        onChange={(e) => setNewTask(e.target.value)}
        onKeyUp={(e) => e.keyCode === 13 && newTask && addToTaskList()}
        placeholder='Adicione uma nova tarefa...'
        value={newTask}
      />
      <Button type='button' onClick={newTask && addToTaskList}>
        ➕
      </Button>
    </Container>
  );
};

export default NewTask;
