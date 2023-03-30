import React from "react";

function Header({
  searchData,
  searchValue,
  setSearchValue,
  handleSearch,
  handleKeyDown,
}) {
  return (
    <div className="h-60 w-full flex justify-center items-center bg-lime-400 rounded-lg">
      <div>
        <div className="border bg-white px-4 py-1">
          <h1 className="text-center font-bold text-2xl">Dictionary</h1>
          <p className="text-sm text-center ">
            Find meanings and definisions for word
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Word..."
            value={searchValue}
            className="block  mt-2 w-[277px] md:w-96 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-none outline-none bg-white px-5 py-2.5 text-gray-700"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex justify-center ">
          <button
            onClick={handleSearch}
            className="px-6 py-2 font-medium tracking-wide my-4 text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Search
          </button>
        </div>
        {searchData && (
          <p className="text-center text-lg py-2">
            Result for : <span className="font-bold">{searchData?.word}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
