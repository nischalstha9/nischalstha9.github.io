import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

var host = window.location.hostname;
host === "localhost"
  ? (axios.defaults.baseURL = "http://127.0.0.1:8000/api/portfolio/")
  : (axios.defaults.baseURL =
      "https://nischalstha9.pythonanywhere.com/api/portfolio/");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
