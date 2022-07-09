import React from "react";
import "./App.css"
import { Routes, Route } from "react-router";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import Shop from "./Components/Shop/Shop";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/User/Login";
import Reg from "./Components/User/Reg";
import Error from "./Components/ErrorPage/Error";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
