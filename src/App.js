import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Channel from "./Pages/Channel";
import Home from "./Pages/Home";
import ResultPage from "./Pages/ResultPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/resultpage" element={<ResultPage />} />
          <Route exact path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
