import React from "react";
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Swiper from "./components/Swiper"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Blog from "./components/Blog"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Swiper/>
      <Hero/>
      <Header/>
      <Blog/>
    </div>
  );
}