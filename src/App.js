import React from "react";


import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Aside from "./components/Aside/Aside";

const App = (props) => {

   return (
      <div className="App">
         <Header/>
         <Aside store={props.store}/>
         <Content store={props.store}/>
         <Footer/>
      </div>

   );
};

export default App;


