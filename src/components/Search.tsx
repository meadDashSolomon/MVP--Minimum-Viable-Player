import { useState, useSyncExternalStore } from "react";

const Search = ({ setShowSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div onClick={() => setShowSearch(false)} className="fixed inset-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-10">
      <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} className="p-10 bg-white rounded shadow-lg">
        <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a player's full name"
        className="p-2 rounded shadow border border-gray-300 ring-2 ring-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">Submit</button>
        <button onClick={() => setShowSearch(false)} type="button" className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition-colors ml-4">Cancel</button>
      </form>
    </div>
  )
}

export default Search;