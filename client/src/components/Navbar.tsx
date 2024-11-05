import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import {
  faBell,
  faBriefcase,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

interface DropdownItemLinkProps {
  title: string; // El título del enlace
  link: string; // La URL a la que apunta el enlace
  className: string;
}

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] px-[10vw] fixed bg-white">
      <ul className="w-full h-full flex flex-row justify-between items-center">
        <LeftSideNavBar />
        <RightSideNavBar />
      </ul>
    </nav>
  );
}

function LeftSideNavBar() {
  return (
    <li className="flex flex-row gap-5 items-center w-[25%] md:w-[30%] justify-around xl:w-1/2">
      <Link to="/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-blue-600 text-4xl hover:text-blue-700"
        />
      </Link>
      <SearchBar/>
    </li>
  );
}

function RightSideNavBar() {
  return (
    <li className="flex flex-row  items-center justify-around w-[75%] md:w-[60%] xl:w-1/2">
      <NavItem to="/" icon={faHouse} text="Home" />
      <NavItem
        to="/Job-Requests/1234"
        icon={faBriefcase}
        text="Job Requests"
        count={2}
      />
      <NavItem icon={faBell} text="Notifications" count={2} />
      <details className="dropdown dropdown-end">
        <summary className="avatar flex flex-col items-center pt-[5px]">
          <div className="w-10 rounded-full cursor-pointer">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </summary>
        <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white text-black gap-3">
          <DropdownItemLink
            className="btn bg-white border-2 border-blue-600 hover:bg-neutral-100 hover:border-blue-400 hover:text-black"
            title="View Profile"
            link="/profile"
          />
          <DropdownItemLink
            className="btn bg-white border-2 border-black hover:bg-neutral-100 hover:border-red-600 hover:text-black"
            title="Sign Out"
            link="/profile"
          />
        </ul>
      </details>
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
