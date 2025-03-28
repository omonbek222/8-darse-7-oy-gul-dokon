import React from "react";
import Navbar from "./components/Nabvar"
import Footer from "./components/Footer"
import Swiper from "./components/Swiper"
import Hero from "./components/Hero"
import Main from "./main/page"
import Login from "./components/Login"
import Register from "./components/Register"

export default function Home() {
  return (
    <div className="w-[1200px] m-auto">
      <Navbar/>
      <Swiper/>
      <Hero/>
      <Footer/>
      <Main/>
      <Login/>
      <Register/>

   
       

      
    </div>
  );
}