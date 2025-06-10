import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import AdmissionsPage from "./pages/AdmissionsPage"
import Footer from "./Components/Footer/Footer"
import NotFoundPage from "./pages/NotFoundPage"
import Header from "./Components/Header/Header"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutpage" element={<AboutPage />} />
              <Route path="/coursespage" element={<CoursesPage />} />
              <Route path="/contactpage" element={<ContactPage />} />
              <Route path="/admissionspage" element={<AdmissionsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App