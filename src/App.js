import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/projects';
import Contacts from './Components/Contacts/Contacts';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
     <About/>
     <Skills />
     <Projects />
     <Contacts />
    </div>
  );
}

export default App;