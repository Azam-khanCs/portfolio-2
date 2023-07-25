import React from "react";
import Header from "./Components/Header/Header";
import css from "./styles/app.module.scss";
import Hero from "./Components/Hero/Hero";
import Experties from "./Components/Experties/Experties";
import Works from "./Components/Works/Works";
import Porfolio from "./Components/Porfolio/Porfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <div className={`bg-primary ${css.container}`}>
        <Header />
        <Hero />
        <Experties />
        <Works />
        <Porfolio />
        <Testimonial />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
