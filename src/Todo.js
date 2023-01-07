import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Todo.module.css";

export const Todo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={styles.Question}>
            <input
              className={styles.input}
              placeholder="What needs to be completed?"
            ></input>
          </div>

          <Row>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
