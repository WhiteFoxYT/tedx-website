import './styles/components.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Footer />
    </div>
  )
}

export default App
