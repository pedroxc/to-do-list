import React, { useState } from "react";

export default function EditItem({ todo, setNome, openModal, deleteTodo }) {
  const [name, setName] = useState();
  return (
    <div>
      Nome da tarefa: {todo.text}
      <div>
        Novo nome da tarfa:{" "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          openModal(false);
          setNome(name);
        }}
      >
        Salvar
      </button>
      <button onClick={() => deleteTodo(todo)}>Deleletar</button>
    </div>
  );
}
