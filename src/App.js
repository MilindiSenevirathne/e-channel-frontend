import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Channel from "./Pages/Channel";
import Home from "./Pages/Home";
import ResultPage from "./Pages/ResultPage";
// import CreateDoctor from "./Pages/CreateDoctor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/result-page" element={<ResultPage />} />
          {/*<Route exact path="/createdoctor" element={<CreateDoctor />} />*/}
          <Route exact path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
