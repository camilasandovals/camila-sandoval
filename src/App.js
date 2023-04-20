import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
import About from "./components/About";
import Quote from "./components/Quote";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Navigation /> */}
        <Header />
        <About />
        <Quote />
        <Footer />
    </div>
  );
}

export default App;
