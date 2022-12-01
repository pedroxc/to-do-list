import React, { useState } from "react";
import { Container, Button, ButtonWarpper } from "./styles";

export default function EditItem({ todo, setNome, openModal, deleteTodo }) {
  const [name, setName] = useState();
  return (
    <Container>
      <label>Nome da tarefa:</label> {todo.text}
      <div>
        <label>Novo nome da tarfa</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <ButtonWarpper>
        <Button
          onClick={() => {
            openModal(false);
            setNome(name);
          }}
          className="save"
        >
          Salvar
        </Button>
        <Button onClick={() => deleteTodo(todo)} className="delete">
          Deleletar
        </Button>
      </ButtonWarpper>
      <ButtonWarpper>
        <Button onClick={() => openModal(false)}>Sair</Button>
      </ButtonWarpper>
    </Container>
  );
}
