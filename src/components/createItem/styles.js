import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

export const InputWarpper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin: 5px;
  }
  input {
    margin: 5px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: blue;
  display: flex;
  padding: 10px;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;
