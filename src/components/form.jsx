import React from "react";
import { Paper, Button, TextField } from "@mui/material";

// import { Container } from './styles';

function Form() {
  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center," }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
        />
        <Button variant="text">Add</Button>
      </div>
    </Paper>
  );
}

export default Form;
