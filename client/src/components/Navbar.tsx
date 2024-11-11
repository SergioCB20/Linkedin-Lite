import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";
import SearchBarDesktop from "./SearchBarDesktop";
import UserDropdown from "./reutilizables/UserDropdown";
import {
  faBell,
  faBriefcase,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBarMobile from "./reutilizables/SearchBarMobile";

interface DropdownItemLinkProps {
  title: string;
  link: string;
  className: string;
}

interface LeftNavProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: (term: string) => void;
}

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  // Función para manejar la búsqueda
  const handleSearch = (term: string) => {
    console.log("Buscando:", term);
    // Realiza la lógica de búsqueda aquí
  };

  return (
    <nav className="w-full fixed h-auto">
      <div className="w-full h-[60px] px-[10vw] bg-white hidden md:block">
        <ul className="w-full h-full flex flex-row justify-between items-center">
          <LeftSideNavBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
          />
          <RightSideNavBar />
        </ul>
      </div>
      <div className="btm-nav bg-white h-[60px] md:hidden ">
        <NavItem to="/" icon={faHouse} text="Home" />
        <NavItem
          to="/Job-Requests:uuid-user-1234"
          icon={faBriefcase}
          text="Job-Requests"
          count={2}
        />
        <UserDropdown positionClass="dropdown-top dropdown-end">
          <DropdownItemLink
            className="btn bg-white border-2 border-primary hover:bg-itemHover hover:border-secondary hover:text-black"
            title="View Profile"
            link="/profile/uuid-user-1234"
          />
          <DropdownItemLink
            className="btn bg-white border-2 border-black hover:bg-itemHover hover:border-red-600 hover:text-black"
            title="Sign Out"
            link="/sign-out"
          />
        </UserDropdown>
      </div>
      <div className="w-full flex bg-white justify-around items-center absolute py-[5px] md:hidden">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-slate-400 cursor-pointer text-3xl hover:text-black transition-all duration-500 md:hidden"
          onClick={() => setOpen(!open)}
        />
        <Link to="/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-primary text-4xl transition-all duration-500 hover:text-primaryHover"
          />
        </Link>
        <NavItem icon={faBell} text="Notifications" count={2} />
      </div>
      <SearchBarMobile
        open={open}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
    </nav>
  );
}

const LeftSideNavBar: React.FC<LeftNavProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
}) => {
  return (
    <li className="flex flex-row gap-5 items-center w-[40%] justify-around">
      <Link to="/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-primary text-4xl hover:text-primaryHover"
        />
      </Link>
      <SearchBarDesktop
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
    </li>
  );
};

function RightSideNavBar() {
  return (
    <li className="flex flex-row  items-center justify-around w-[60%]">
      <NavItem to="/" icon={faHouse} text="Home" />
      <NavItem
        to="/Job-Requests/uuid-user-1234"
        icon={faBriefcase}
        text="Job Requests"
        count={2}
      />
      <NavItem icon={faBell} text="Notifications" count={2} />
      <UserDropdown positionClass="dropdown-end">
        <DropdownItemLink
          className="btn bg-white border-2 border-primary hover:bg-itemHover hover:border-blue-400 hover:text-black"
          title="View Profile"
          link="/profile/uuid-user-1234"
        />
        <DropdownItemLink
          className="btn bg-white border-2 border-black hover:bg-itemHover hover:border-red-600 hover:text-black"
          title="Sign Out"
          link="/sign-out"
        />
      </UserDropdown>
    </li>
  );
}

const DropdownItemLink: React.FC<DropdownItemLinkProps> = ({
  title,
  link,
  className,
}) => {
  return (
    <li>
      <Link className={className} to={link}>
        {title}
      </Link>
    </li>
  );
};
