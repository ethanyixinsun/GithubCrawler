import styles from "./SearchBox.module.css";
import { Search } from "react-bootstrap-icons"


export const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div className={styles["search-group"]}>
      <Search style={{marginLeft: "1rem"}}/>
      <input
        className={`${styles["search-box"]} ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};