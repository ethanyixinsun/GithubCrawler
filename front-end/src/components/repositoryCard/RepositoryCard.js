import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./RepositoryCard.module.css";
import { StarFill, CodeSlash } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export const RepositoryCard = (props) => {
  return (
    <a href={props.repo.link} target="_blank" style={{ textDecoration: 'none' }} >
      <Card className={styles["repository-card"]}>
        <Card.Body>
          <Card.Title className={styles["card-title"]}>{props.repo.name}</Card.Title>
          <Row>
            <Col>
              <Card.Subtitle className={`mb-2 text-muted styles["card-subtitle"]`}>
                <CodeSlash className={styles["icon"]} />{props.repo.language}
              </Card.Subtitle>
            </Col>
            <Col>
              <Card.Subtitle className={`mb-2 text-muted styles["card-subtitle"]`}>
                <StarFill className={styles["icon"]} />{props.repo.stars}
              </Card.Subtitle>
            </Col>
          </Row>
          <Card.Text className={styles["card-text"]}>{props.repo.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};