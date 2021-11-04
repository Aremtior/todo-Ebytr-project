import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
`;

const BtnRemoveTask = ({ id }) => {
  const removeFromTaskList = () => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <Button type="button" onClick={removeFromTaskList}>
      ➖
    </Button>
  );
};

export default BtnRemoveTask;
