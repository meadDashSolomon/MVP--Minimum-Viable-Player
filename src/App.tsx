import { useState, useEffect } from 'react'
import RulesModal from "./components/RulesModal";
import Header from './components/Header';
import Grid from './components/Grid';
import TopCriteria from './components/TopCriteria';
import './input.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black pb-20">
    {/* //   <RulesModal /> */}
      <Header />
      <TopCriteria />
      {/* <LeftCriteria /> */}
      <Grid />
      {/* <Search /> */}
    </div>
  );
}

export default App
