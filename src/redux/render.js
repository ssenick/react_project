import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../App";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (data) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App state={data}/>
         </React.StrictMode>
      </BrowserRouter>
   );
}

export default renderEntireTree;
