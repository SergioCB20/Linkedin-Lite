import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Buscador desplegable en pantallas móviles */}
      {isSearchVisible && (
        <label
          className="input input-bordered w-full h-[40px] bg-slate-200 items-center text-black gap-2 md:w-[450px] flex"
        >
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" className="w-full" placeholder="Search" />
        </label>
      )}

      {/* Ícono de lupa para pantallas pequeñas */}
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="md:hidden block text-3xl hover:text-black transition-all duration-500 cursor-pointer"
        onClick={toggleSearchBar}
      />

      {/* Buscador en pantallas grandes (siempre visible) */}
      <label
        className="input input-bordered w-full h-[40px] bg-slate-200 items-center text-black gap-2 hidden md:flex md:w-[450px]"
      >
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="w-full" placeholder="Search" />
      </label>
    </div>
  );
};

export default SearchBar;
