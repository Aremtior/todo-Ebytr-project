import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #444;
  padding-bottom: 20px;
`;

const Header = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Header;
