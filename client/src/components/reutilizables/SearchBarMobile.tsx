import React from "react";

interface SearchBarProps {
  open: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: (term: string) => void;
}

const SearchBarMobile: React.FC<SearchBarProps> = ({
  open,
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
    <div className={`w-[200px] block md:hidden mt-[50px] ms-[20px]`}>
      <label
        className={`input input-bordered w-full ${
          open ? "h-[40px]" : "h-0 border-none"
        } flex items-center text-black gap-2 transition-all duration-700`}
      >
        <input
          type="text"
          className={`w-full ${open ? "block" : "hidden"}`}
          value={searchTerm}
          placeholder="Search"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default SearchBarMobile;
