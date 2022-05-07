import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { NavBar } from "./components/NavBar/NavBar";
import { Virkskolan } from "./pages/Virkskolan/Virkskolan";

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
            <Route path="/virkskolan" element={<Virkskolan />} />
            <Route path="/kontakt" element={<></>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
