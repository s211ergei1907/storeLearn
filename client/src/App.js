import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
  return (
    (
      // <BrowserRouter>
      //   <AppRouter />
      // </BrowserRouter>
      <div>Привет мир</div>
    ),
    document.getElementById("root")
  );
}

export default App;
