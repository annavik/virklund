import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Intro } from "./components/Intro/Intro";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Menu}>
        <NavBar />
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.Content}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/monster" element={<></>} />
            <Route path="/virkskolan" element={<></>} />
            <Route path="/kontakt" element={<></>} />
          </Routes>
        </div>
      </div>
      <div className={styles.Footer}></div>
    </div>
  );
}

export default App;
