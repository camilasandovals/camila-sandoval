import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import About from "./components/About";
import Quote from "./components/Quote";
import Questions from "./components/Questions";
import PicCarousel from "./components/Carousel"
import Portfolio from "./components/Portfolio";

export default (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/home" element={<Header />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/recommendations" element={<PicCarousel />} />
    </Routes>
)