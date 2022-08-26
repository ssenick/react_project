import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";

const App = (props) => {

   return (
      <div className="App">
         <Header/>
         <Nav/>
         <Content data={props.data}/>
         <Footer/>
      </div>

   );
};

export default App;


