import { Card } from 'react-bootstrap';
import styles from './UserCard.module.css';
import { Link } from 'react-router-dom';

export const UserCard = ({ user }) => {
  return (
    <Link to={`repository/${user.username}`}>
      <Card className={styles["user-card"]}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
          <Card.Title className={styles["card-title"]}>{user.username}</Card.Title>
          <Card.Subtitle className={styles["card-subtitle"]} >{user.name}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Link>
  );
};