import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface NavItemProps {
  to?: string;
  icon: IconDefinition;
  text: string;
  count?: number;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, text, count = 0 }) => {
  return (
    <Link
      to={to || '#'}
      className="flex flex-row gap-3 text-slate-400 items-center hover:text-black transition-all duration-500 cursor-pointer"
    >
      <div className="relative">
        {count > 0 && (
          <div className="bg-red-600 text-xs text-center font-bold w-[15px] h-[15px] text-white rounded-full absolute -right-2">
            {count}
          </div>
        )}
        <FontAwesomeIcon icon={icon} className="text-3xl" />
      </div>
      <p className='hidden lg:block'>{text}</p>
    </Link>
  );
};

export default NavItem;
