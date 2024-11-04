import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";

interface DropdownItemLinkProps {
  title: string; // El título del enlace
  link: string; // La URL a la que apunta el enlace
  className: string;
}

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] px-[10vw] bg-white">
      <ul className="w-full h-full flex flex-row justify-between items-center">
        <LeftSideNavBar />
        <RightSideNavBar />
      </ul>
    </nav>
  );
}

function LeftSideNavBar() {
  return (
    <li className="flex flex-row gap-2 items-center">
      <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 text-4xl" />
      <label
        className="input input-bordered w-[250px] h-[40px]
            bg-slate-200 flex items-center text-black gap-2"
      >
        <FontAwesomeIcon icon={faSearch} className="" />
        <input type="text" className="" placeholder="Search" />
      </label>
    </li>
  );
}

function RightSideNavBar() {
  return (
    <li>
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
            className="btn bg-white border-2 border-blue-600 hover:bg-neutral-100 hover:border-blue-400 hover:text-black"
            title="Job Posting Account"
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
