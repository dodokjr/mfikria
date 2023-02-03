import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Price from "./components/Price/Price";
import Anime from "./components/Anime/Anime";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import UpdateList from "./components/UpdateList";
import Calculator from "./components/ProjectGabut/Calculator/Calculator";
import Coin from "./components/ProjectGabut/Crypto/Coin";
import Coins from "./components/ProjectGabut/Crypto/Coins";
import
{
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HiArrowUp } from "react-icons/hi";
import axios from "axios";

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


  const [showButton, setShowButton] = useState(false);

  useEffect(() =>
  {
    window.addEventListener("scroll", () =>
    {
      if (window.pageYOffset > 20)
      {
        setShowButton(true);
      } else
      {
        setShowButton(false);
      }
    });
  }, []);


  //crypto
  const [coins, setCoins] = useState([]);
  const api = "https://api-mfikria.vercel.app/api/crypto/"

  useEffect(() =>
  {
    axios.get(api).then((response) =>
    {
      setCoins(response.data)
    }).catch((error) =>
    {
      console.log(error)
    })
  }, [])

  // This function will scroll the window to the top 
  const scrollToTop = () =>
  {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
          <Route path="/updatelist" element={<UpdateList />} />
          <Route path="/projectgabut/calculator" element={<Calculator />} />
          <Route path="/projectgabut/coin" element={<Coins coins={coins} />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />

        {showButton && (
          <button onClick={scrollToTop} className="back-to-top btn btn-light btn-floating btn-lg">
            <HiArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
