import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: (term: string) => void;
}

const SearchBarDesktop: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchTerm); // Ejecuta la búsqueda al presionar Enter
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <label className="input input-bordered w-full h-[40px] bg-slate-200 flex items-center text-black gap-2">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="w-full"
          value={searchTerm}
          placeholder="Search"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default SearchBarDesktop;
