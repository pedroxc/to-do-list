import React from "react";
import Card from "../components/card";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <Card name="Manhã" />
      <Card name="Tarde" />
      <Card name="Noite" />
      <Card name="Qualquer Hora" />
    </Container>
  );
}
