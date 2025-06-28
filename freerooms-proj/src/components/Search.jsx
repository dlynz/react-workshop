import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function Search({ searchTerm, setSearchTerm }) {
    return(
        <div className="flex py-1 h-13 justify-between">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className="flex gap-x-2">
                <SearchButton>
                    <svg class="h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterAltIcon">
                        <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61">
                        </path>
                    </svg>
                    Filters
                </SearchButton>
                <SearchButton>
                    <svg class="h-6 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q7mezt" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterListIcon">
                        <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z">
                        </path>
                    </svg>
                    Sort
                </SearchButton>
            </div>
        </div>
    );
}

export default Search;