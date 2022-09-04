import React from "react";
import Nav from "./Nav";


const NavContainer = (props) => {
   let state = props.store.getState();
   return <Nav navList={state.aside.navList}/>
};

export default NavContainer;
