import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here, e.g., API call or filtering data
        console.log("Searching for:", query);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center justify-between flex-grow gap-4 lg:px-[1%]"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Title, subject, or ISBN"
                className="flex flex-grow py-2 bg-white border-b-2 text-lg outline-none lg:px-[1%] text-text font-heading"
            />
            <button type="submit">
                <FaSearch size={22} className="text-red-900" />
            </button>
        </form>
    );
}

export default SearchBar;
