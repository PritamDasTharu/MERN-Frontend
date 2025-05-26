import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import GridCard from "../components/GridCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <GridCard />
      {/* <h1 className="text-danger">Home</h1> */}
      <Footer />
    </>
  );
};

export default Home;
