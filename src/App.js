import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
     <About/>
     <Skills />
    </div>
  );
}

export default App;