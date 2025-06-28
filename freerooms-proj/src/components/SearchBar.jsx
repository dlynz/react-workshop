function SearchBar({ searchTerm, setSearchTerm }) {
    return(
        <div className="h-full relative flex items-center">
            {/* Search Icon (Left Side) */}
            <svg
                className="absolute left-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            
            <input
                type="text"
                placeholder="Search for a building..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-full w-[50vw] py-2 pl-10 pr-4 rounded-md border-2 border-gray-300 focus: outline-none focus:border-orange-500 transition-all duration-300"
            />
        </div>
    );
}

export default SearchBar;