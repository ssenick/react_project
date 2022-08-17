import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Nav />
            <Profile />
            <Footer/>
        </div>
    )
}


export default App;