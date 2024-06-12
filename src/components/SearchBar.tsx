import { useState } from "react";

export const SearchBar = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  return (
    <div className="flex items-center sm:w-96">
      <div
        className={`${
          isSearchExpanded ? "w-full" : "flex w-11/12"
        } max-sm:hidden block flex text-gray-900 border border-gray-600 rounded-3xl p-1 pl-3 text-sm pr-2`}
      >
        <input
          id="default-search"
          className="w-full bg-black text-white border-none text-base outline-none pl-3"
          placeholder="Search"
          required
        />
        <button className="bg-slate-700 rounded-3xl text-gray-400  font-bold py-2 px-4 inline-flex items-center">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`max-sm:flex flex-row-reverse ${
          isSearchExpanded
            ? "w-full border border-gray-600 rounded-3xl"
            : "w-10"
        } hidden items-center p-1 pl-3 pr-2 
        `}
      >
        <button
          onClick={handleSearchClick}
          className="bg-slate-700 rounded-3xl text-gray-400 font-bold py-2 px-4 inline-flex items-center"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
        {isSearchExpanded && (
          <input
            id="default-search"
            className="w-full bg-slate-950 border border-gray-600 rounded-3xl text-white border-none outline-none ml-2"
            placeholder="Search"
            required
          />
        )}
      </div>
    </div>
  );
};
