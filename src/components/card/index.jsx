import React, { useState, useEffect } from "react";
import Item from "../item";
import List from "@mui/material/List";
import CreateItem from "../createItem";
import Modal from "react-modal";
import { setStorage, getStorage } from "../../utils/storage";

import { Container, Text, Warpper, Button } from "./styles";

export default function Card({ name }) {
  const [todos, setTodos] = useState([]);
  const [modal, openModal] = useState(false);
  const [id, setId] = useState(0);
  const todoHandler = (todo) => {
    setTodos([...todos, todo]);
    setStorage(name, JSON.stringify([...todos, todo]));
  };
  const deleteTodo = (e) => {
    const filtered = todos.filter((todo) => todo.id !== e.id);
    setTodos(filtered);
    setStorage(name, JSON.stringify(filtered));
  };
  useEffect(() => {
    const todos = JSON.parse(getStorage(name));
    if (todos) {
      setTodos(todos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              <Item todo={todo} deleteTodo={deleteTodo} />
            </div>
          ))}
        </List>
      </Container>
      <Modal
        isOpen={modal}
        style={{
          content: {
            maxWidth: 300,
            maxHeight: "50vh",
            margin: "auto",
          },
        }}
      >
        <CreateItem
          todoHandler={todoHandler}
          openModal={openModal}
          id={id}
          setId={setId}
        />
      </Modal>
    </>
  );
}
