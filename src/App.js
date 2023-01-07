import "./styles.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Todo } from "./Todo";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Container>
        <Row>
          <Col>
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "30px",
                fontSize: "40px",
                color: "salmon",
              }}
            >
              Todo's to be completed
            </div>
          </Col>
        </Row>
        <Todo />
      </Container>
    </div>
  );
}
