import React from "react";

import Header from "./Header";
import Banner from "./Banner";
import { Hero } from "./Hero";
import Mission from "./Mission";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Hero />
      <Mission />
      <Footer />
    </div>
  );
};

export default App;
