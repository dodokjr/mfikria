import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Price from "./components/Price/Price";
import UpdateList from "./components/UpdateList";
import Contact from "./components/Contact";
import
{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NotFound from "./components/NotFound";
import NoInternetConnection from "./components/NoInternetConnection";
import Blog from "./components/Blog/Blog";
import Blogt from "./components/Blog/Blogt";
import Cv from './components/Blog/Cv';

function App()
{
  const [load, upadateLoad] = useState(true);

  useEffect(() =>
  {
    const timer = setTimeout(() =>
    {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  // This function will scroll the window to the top 
  const scrollToTop = () =>
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  return (
    <NoInternetConnection>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/kaget" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/blogtext" element={<Blogt />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/updatelist" element={<UpdateList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />

        </div>
      </Router>
    </NoInternetConnection>
  );
}

export default App;
