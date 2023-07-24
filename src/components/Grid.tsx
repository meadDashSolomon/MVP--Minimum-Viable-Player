import '../input.css'

const Grid = () => {


  return (
    <div className="gameWrapper mt-4 mx-auto w-1/3">
      <div className="gameBoard grid grid-cols-3 gap-4">
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="1"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="2"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="3"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="4"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="5"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="6"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="7"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="8"></div>
        <div className="cell aspect-[1/1] bg-blue-500 border-2 border-white" id="9"></div>
      </div>
    </div>
  );
}

export default Grid;