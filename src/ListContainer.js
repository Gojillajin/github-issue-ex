import Button from "./components/Button";
import styles from "./ListContainer.module.css";

export default function ListContainer() {
  return (
    <div className={styles.listContainer}>
      <Button
        style={{
          fontSize: "14px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        New Issue
      </Button>
    </div>
  );
}
