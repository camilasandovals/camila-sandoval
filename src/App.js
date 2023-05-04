import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Quote from "./components/Quote";
import Questions from "./components/Questions";
import PicCarousel from "./components/Carousel"
import Portfolio from "./components/Portfolio";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
      <>
        {/* <Navigation /> */}
        <Header />
        <About />
        <Quote />
        <Portfolio />
        {/* <Questions /> */}
        <PicCarousel />
       
        <Footer />
      </>
  );
}

export default App;
