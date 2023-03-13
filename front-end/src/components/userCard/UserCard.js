import React from "react";
import { Card } from "react-bootstrap";
import styles from "./UserCard.module.css";
import { Link } from "react-router-dom";

export const UserCard = (props) => {
  return (
    <Link to={`repository/${props.user.username}`}>
      <Card className={styles["user-card"]}>
        <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/37851086?v=4" />
        <Card.Body>
          <Card.Title>{props.user.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.user.name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};