import React, { ReactNode } from 'react';

interface DropdownProps {
  positionClass: string; // Ejemplo: "dropdown-top" o "dropdown-end"
  children: ReactNode;
}

const UserDropdown: React.FC<DropdownProps> = ({ positionClass, children }) => {
  return (
    <details className={`dropdown ${positionClass}`}>
      <summary className="avatar flex flex-col items-center pt-[5px]">
        <div className="w-10 rounded-full cursor-pointer">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
        </div>
      </summary>
      <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white text-black gap-3">
        {children}
      </ul>
    </details>
  );
};

export default UserDropdown;
