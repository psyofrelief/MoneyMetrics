import React from "react";
import Navbar from "./Navbar.js";
import HomeMain from "./HomeMain.js";
import Footer from "./Footer.js";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar />
      <HomeMain />
      <Footer />
    </div>
  );
};

export default Home;
