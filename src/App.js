import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
