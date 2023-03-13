import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./RepositoryCard.module.css";
import { StarFill } from 'react-bootstrap-icons';

export const RepositoryCard = (props) => {
  return (
    <Card className={styles["repository-card"]}>
      <Card.Body>
        <Card.Title>{props.repo.name}</Card.Title>
        <Row>
          <Col>
            <Card.Subtitle className="mb-2 text-muted">{props.repo.language}</Card.Subtitle>
          </Col>
          <Col>
            <Card.Subtitle className="mb-2 text-muted">
              <StarFill style={{ marginRight: '1rem' }} />{props.repo.stars}
            </Card.Subtitle>
          </Col>
        </Row>
        <Card.Text>{props.repo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};