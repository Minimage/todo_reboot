import "./styles.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}
