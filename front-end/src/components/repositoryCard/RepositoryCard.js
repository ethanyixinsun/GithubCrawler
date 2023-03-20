import { Row, Col, Card } from 'react-bootstrap';
import styles from './RepositoryCard.module.css';
import { StarFill, CodeSlash } from 'react-bootstrap-icons';

export const RepositoryCard = ({ repo }) => {
  return (
    <a href={repo.link} target="_blank" rel="noreferrer">
      <Card className={styles["repository-card"]}>
        <Card.Body>
          <Card.Title className={styles["card-title"]}>{repo.name}</Card.Title>
          <Row>
            <Col>
              <Card.Subtitle className={`mb-2 text-muted styles["card-subtitle"]`}>
                <CodeSlash />{repo.language}
              </Card.Subtitle>
            </Col>
            <Col>
              <Card.Subtitle className={`mb-2 text-muted styles["card-subtitle"]`}>
                <StarFill />{repo.stars}
              </Card.Subtitle>
            </Col>
          </Row>
          <Card.Text>{repo.description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};