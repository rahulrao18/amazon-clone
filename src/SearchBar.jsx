import React from "react";

function SearchBar() {
  return (
    <div className="flex w-[280px] sm:w-[80px] lg:w-[824px]">
      <div className="relative">
        <select
        className="
          h-10
          pl-2 pr-5
          bg-gray-100
          border
          border-r-0
          border-[#2D3C59]
          rounded-l-md
          text-sm
          text-[#2D3C59]
          appearance-none
          outline-none
          "
        >
          <option>All</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
          <option>Books</option>
        </select>

        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-black/60">
          ▼
        </span>
      </div>

      <input
        type="text"
        placeholder="Search Amazon"
        className="flex-1 h-10 px-2 bg-white outline-none border border-r-0 border-l-0 text-sm border-[#2D3C59]"
      />

      <button
        className="h-10 px-5 bg-yellow-400 border border-l-0 rounded-r-md text-base font-medium border-[#2D3C59] text-[#2D3C59]"
      >
        Search
      </button>
    </div>
  );
}



export default SearchBar;
