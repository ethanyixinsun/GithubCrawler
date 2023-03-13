import React from "react";
import { Card } from "react-bootstrap";
import styles from "./UserCard.module.css";
import { Link } from "react-router-dom";

export const UserCard = (props) => {
  return (
    <Link to={`repository/${props.user.username}`} style={{ textDecoration: 'none' }}>
      <Card className={styles["user-card"]}>
        <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/37851086?v=4" />
        <Card.Body>
          <Card.Title className={styles["card-title"]}>{props.user.username}</Card.Title>
          <Card.Subtitle className={styles["card-subtitle"]} >{props.user.name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};