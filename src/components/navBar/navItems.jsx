import { Link } from "react-router-dom";
import { navList } from "../../constant/nav";
import { SmText } from "../../constant/styles/text";

export const NavItems = ({ className, onClick }) => {
  return (
    <nav className={`${className}`}>
      {/* list from mock file */}
      {navList.map((el) => (
        <Link key={el.title} to={el.route}>
              <SmText
              className='text-primary-900 dark:text-gray-300'>{el.title}</SmText>
        </Link>
      ))}
    </nav>
  );
};
