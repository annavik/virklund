import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { NavBar } from "./components/NavBar/NavBar";
import { Patterns } from "./pages/Patterns/Patterns";
import { Virkskolan } from "./pages/Virkskolan/Virkskolan";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.NavBarContainer}>
        <NavBar />
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.Content}>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/monster" element={<Patterns />} />
            <Route path="/virkskolan" element={<Virkskolan />} />
            <Route path="/kontakt" element={<></>} />
          </Routes>
        </div>
        <div className={styles.FooterContainer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
