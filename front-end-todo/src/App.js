import styled from 'styled-components';
import Home from './pages/Home';

export const Container = styled.div`
  background-color: #171819;
  color: #797a81;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 10px;
`;

function App() {
  return (
    <Container>
      <Area>
        <Home />
      </Area>
    </Container>
  );
}

export default App;
