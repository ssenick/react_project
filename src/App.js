import React from "react";


import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Aside from "./components/Aside/Aside";

const App = () => {

   return (
      <div className="App">
         <Header/>
         <Aside/>
         <Content/>
         <Footer/>
      </div>

   );
};

export default App;


