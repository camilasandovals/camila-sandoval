import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import About from "./components/About";
import Quote from "./components/Quote";
import Questions from "./components/Questions";
import PicCarousel from "./components/Carousel"
import Portfolio from "./components/Portfolio";
import routes from "../src/routes"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
      <Router>
         {/* <Menubar /> */}
        {/* {routes}  */}
        <Header />
        <About />
        <Quote />
        <Portfolio />
        {/* <Questions /> */}
        {/* <PicCarousel /> */}
        <Footer />
      </Router>
  );
}

export default App;
