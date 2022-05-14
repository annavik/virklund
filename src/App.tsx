import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { Home } from "./pages/Home/Home";
import { LessonsPage } from "./pages/LessonsPage/LessonsPage";
import { PatternPage } from "./pages/PatternPage/PatternPage";
import { PatternsPage } from "./pages/PatternsPage/PatternsPage";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.NavBarContainer}>
        <NavBar />
      </div>
      <div className={styles.ContentContainer}>
        <div className={styles.Content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patterns" element={<PatternsPage />} />
            <Route path="/patterns/:id" element={<PatternPage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
