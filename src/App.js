import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App">
      <h1>My React Portfolio</h1>
      <Header />
      <Home />
      <Contact />
      <ProjectsPage />
      <Projects />
    </div>
  );
}

export default App;
