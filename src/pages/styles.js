import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  background-color: wheat;
  height: 100vh;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    width: 100vw;
    height: fit-content;
  }
`;
