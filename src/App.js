import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Quote from "./components/Quote";
import Grid from "./components/Grid"
import Questions from "./components/Questions";
import PicCarousel from "./components/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  return (
      <>
        {/* <Navigation /> */}
        <Header />
        <About />
        <Quote />
        <Grid />
        {/* <Questions /> */}
        {/* <PicCarousel /> */}
       
        <Footer />
      </>
  );
}

export default App;
