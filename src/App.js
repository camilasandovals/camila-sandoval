import Header from "./components/Header";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
import About from "./components/About";
import Quote from "./components/Quote";
import Video from "./components/Video"
import Grid from "./components/Grid"
import PicCarousel from "./components/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {

  return (
    <div className="App">
        {/* <Navigation /> */}
        <Header />
        <About />
        <Quote />
        <Grid />
        <PicCarousel />
        <Video />
        <Footer />
    </div>
  );
}

export default App;
