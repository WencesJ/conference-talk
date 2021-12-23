import { Link, NavLink, useMatch } from "react-router-dom";
import { navList } from "../../constant/nav";
import { SmText } from "../../constant/styles/text";
import DarkMode from "../dark";

const AppBase = () => {
  const [ dark] = DarkMode();
  return (
      <div className=' sm:hidden flex justify-evenly items-center py-4 
                            text-sm absolute bg-white dark:bg-dark-800
                             bottom-0 right-0 w-full z-10 shadow-white
                             rounded-t '>
      {navList.map((el) => (
        <NavLink key={el.title} to={el.route}  style={({ isActive }) => {
          return {
            display: "grid",
            gridTemplate: "1fr",
            justifyItems: 'center',
            fontSize: '.8rem',
            color: isActive ? "red" : dark ? '#fafafa' : 'black'
          };
        }}>
          <i className='fa fa-moon-o' />

          {el.title}
        </NavLink>
      ))}
    </div>
  );
};

export default AppBase;
