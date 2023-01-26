import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/top-headlines" element={<TopHeadlines />} />
        </Routes>
        {/* <Cards />  */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
