import styled from "styled-components";

export const Container = styled.div`
  label {
    margin: 5px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      width: 50%;
    }
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
  width: 50%;
  &.save {
    background-color: #6eda2c;
  }
  &.delete {
    background-color: red;
  }
`;
export const ButtonWarpper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
