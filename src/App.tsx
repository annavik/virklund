import styles from "./App.module.scss";
import { Intro } from "./components/Intro/Intro";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Menu}></div>
      <div className={styles.ContentContainer}>
        <div className={styles.Content}>
          <Intro />
        </div>
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default App;
