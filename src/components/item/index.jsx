import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Settings from "@mui/icons-material/Settings";
import { Paper } from "@mui/material";
import Modal from "react-modal";
import EditItem from "../EditItem";

export default function Item({ todo, deleteTodo }) {
  const [modal, openModal] = useState(false);
  const [nome, setNome] = useState(todo.text);
  const [checked, setChecked] = useState(false);

  return (
    <Paper>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => {
              openModal(true);
            }}
          >
            <Settings />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          </ListItemIcon>
          <ListItemText
            primary={nome}
            sx={{ textDecoration: checked ? "line-through" : "none" }}
          />
        </ListItemButton>
      </ListItem>
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
        <EditItem
          todo={todo}
          setNome={setNome}
          openModal={openModal}
          deleteTodo={deleteTodo}
        />
      </Modal>
    </Paper>
  );
}
