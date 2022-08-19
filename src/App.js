import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";

const App = () => {
   return (
      <div className="App">
         <Header/>
         <Nav/>
         <Content/>
         <Footer/>
      </div>
   );
};

export default App;


