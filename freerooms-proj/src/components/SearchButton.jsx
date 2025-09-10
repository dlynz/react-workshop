function SearchButton({ children }) {
    return(
        <button className="cursor-pointer flex fill-orange-500 items-center h-full px-7 border-2 rounded-md border-orange-500 text-md font-bold text-orange-500">
            { children }
        </button>
    );
}

export default SearchButton;