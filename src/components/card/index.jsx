import React, { useState } from "react";
import Item from "../item";
import List from "@mui/material/List";
import CreateItem from "../createItem";
import Modal from "react-modal";

import { Container, Text, Warpper, Button } from "./styles";

export default function Card({ name }) {
  const [todos, setTodos] = useState([]);
  const [modal, openModal] = useState(false);

  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <>
      <Container>
        <Warpper>
          <Text>{name}</Text>
          <Button onClick={() => openModal(true)}>ADD</Button>
        </Warpper>
        <List sx={{ width: "100%", marginTop: "1em" }}>
          {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1rem" }}>
              <Item deleteTodo={deleteTodo} todo={todo} />
            </div>
          ))}
        </List>
      </Container>
      <Modal
        isOpen={modal}
        style={{
          content: {
            maxWidth: "30vw",
            maxHeight: "50vh",
            margin: "auto",
          },
        }}
      >
        <CreateItem todoHandler={todoHandler} openModal={openModal} />
        <Button onClick={() => openModal(false)}>Sair</Button>
      </Modal>
    </>
  );
}
