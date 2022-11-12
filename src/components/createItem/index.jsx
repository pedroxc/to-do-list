import React, { useState } from "react";
import { Button } from "./styles";

export default function CreateItem({ todoHandler, openModal }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

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
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => todoCreate()}>Criar Tarefa</Button>
    </div>
  );
}
