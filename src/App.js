import Header from "./components/Header";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
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
        <Menubar />
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
