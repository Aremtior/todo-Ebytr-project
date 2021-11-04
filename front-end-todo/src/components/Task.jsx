import styled from 'styled-components';
import BtnRemoveTask from './BtnRemoveTask';
import CheckTask from './CheckTask';

const Container = styled.div(
  ({ done }) => `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;

    input {
      height: 25px;
      width: 25px;
      margin-right: 10px;
      cursor: pointer;
    }

    label {
      color: #ccc;
      cursor: pointer;
      text-decoration: ${done ? 'line-through' : 'initial'};
    }
    `
);

const Task = ({ task }) => {
  return (
    <Container done={task.done}>
      <CheckTask task={task} />
      <BtnRemoveTask id={task._id} />
    </Container>
  );
};

export default Task;
