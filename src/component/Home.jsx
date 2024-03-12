import React from "react";
import "./home.css";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
};

export default Home;
