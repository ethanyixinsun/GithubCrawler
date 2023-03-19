import styles from "./SearchBox.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons"


export const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div className={styles["search-group"]}>
      <Search className={styles["icon"]} />
      <input
        className={`${styles["search-box"]} ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />

    </div>

  );
};