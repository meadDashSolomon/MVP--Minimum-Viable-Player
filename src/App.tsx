import { useState, useEffect } from "react";
import RulesModal from "./components/RulesModal";
import Header from "./components/Header";
import BigGrid from "./components/Grid/BigGrid";
import Search from "./components/Search";
import "./input.css";

function App() {
  return (
    <div className="bg-black pb-20">
      {/* <RulesModal /> */}
      <Header />
      <BigGrid />
    </div>
  );
}

export default App;
