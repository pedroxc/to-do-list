import React, { useState } from "react";
import { Container, Button, InputWarpper } from "./styles";

export default function CreateItem({ todoHandler, openModal, id, setId }) {
  const [text, setText] = useState("");
  const [tarefa, setTarefa] = useState("");

  const todoCreate = () => {
    if (text === "") {
      alert("Escreva uma descrição para a taréfa");
    } else {
      const todoObj = { text: text, id: id };
      setId(id + 1);

      todoHandler(todoObj);
      openModal(false);
    }
  };
  return (
    <Container>
      <InputWarpper>
        <h1>Selecione o timpo de tarfa</h1>
        <select onChange={(e) => setTarefa(e.target.value)}>
          <option></option>
          <option>Tarfa Norlmal</option>
          <option>Tarfa complexa</option>
        </select>

        {tarefa === "Tarfa Norlmal" && (
          <>
            <label>Nome a sua Tarefa</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={() => todoCreate()}>Criar Tarefa</Button>
          </>
        )}
        {tarefa === "Tarfa complexa" && <>Em desenvolvimento</>}
      </InputWarpper>
      <Button onClick={() => openModal(false)}>Sair</Button>
    </Container>
  );
}
