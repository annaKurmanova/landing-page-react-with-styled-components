import { useState } from "react";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Icons from "./components/Icons";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Icons />
      <Productive />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
