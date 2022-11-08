import React from "react";
import Form from "./components/form";
import TodoItem from "./components/todoItem";
import List from "@mui/material/List";
import { Container } from "@mui/material";
import "./App.css";

// import { Container } from './styles';

function App() {
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form />
      <List
        sx={{ width: "100%", bgcolor: "background.paper", marginTop: "1em" }}
      >
        <TodoItem />
      </List>
    </Container>
  );
}

export default App;
