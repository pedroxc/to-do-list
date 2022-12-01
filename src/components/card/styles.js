import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(50vw - 100px);
  height: fit-content;
  margin: 25px;
  border-radius: 12px;
  @media (max-width: 1000px) {
    width: calc(100vw - 100px);
    height: fit-content;
  }
`;
export const Text = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const Warpper = styled.div`
  display: flex;
  justify-content: space-around;
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
`;
