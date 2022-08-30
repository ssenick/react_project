import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import state, {
   addNewMessage,
   addNewPost,
   subscribe,
   updateTextArea,
   updateTextAreaMessage,
   updateTextInput
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App state={state} addNewPost={addNewPost}
                 updateTextArea={updateTextArea}
                 updateTextInput={updateTextInput}
                 addNewMessage={addNewMessage}
                 updateTextAreaMessage={updateTextAreaMessage}
            />
         </React.StrictMode>
      </BrowserRouter>
   );
}
subscribe(renderEntireTree);

renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
