import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CheckTask = ({ task }) => {
  const updateTaskList = (done) => {
    fetch(`http://localhost:3001/${task._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done,
      }),
    });
  };
  return (
    <Container>
      <input
        type="checkbox"
        id={task._id}
        checked={task.done}
        onChange={(e) => updateTaskList(e.target.checked)}
      />
      <label htmlFor={task._id}>{task.task}</label>
    </Container>
  );
};

export default CheckTask;
