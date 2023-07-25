const LittleGrid = ({setShowSearch}) => {


  return (
    <div className="gameWrapper mt-4 w-full col-start-4 col-span-3 row-start-2 row-span-3">
      <div className="gameBoard grid grid-cols-3 gap-4">
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="1"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="2"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="3"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="4"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="5"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="6"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="7"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="8"></div>
        <div onClick={() => setShowSearch(true)} className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="9"></div>
      </div>
    </div>
  );
}

export default LittleGrid;