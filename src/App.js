import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <About />
        <Footer />
    </div>
  );
}

export default App;
