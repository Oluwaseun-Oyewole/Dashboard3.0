import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/svg/logo.svg";
import Toggler from "../../assets/svg/mode.svg";
import NavImage from "../../assets/svg/nav.svg";

import { useTheme } from "../../context";
import { AppRoutesType } from "../../routes/app.routes";

type MenuProps = {
  routesArray: Array<AppRoutesType>;
  className?: string;
  showLinkName?: boolean;
};

export const NavLinkComponent = ({ routesArray, className }: MenuProps) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const variant = {
    hidden: { opacity: 0, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  const navItemClasses = classNames(
    "links flex flex-col lg:flex-row transition duration-200ms ease-in-out items-center",
    "space-x-[10px] font-normal text-sm"
  );

  return (
    <div
      className={`${
        isDarkMode ? "bg-bgBlackMedium" : "bg-white"
      }   sticky top-0 bottom-0 left-0 `}
    >
      <div className="flex flex-col justify-between h-screen items-center py-8">
        <ul
          className={
            className ? className : `flex flex-col gap-12 items-center`
          }
        >
          <img src={Logo} alt="logo image" className="w-[15px] md:w-12" />

          {routesArray?.map(({ path, id, icon }: AppRoutesType) => {
            return (
              <motion.li
                key={`navLink${id}`}
                variants={variant}
                animate="visible"
                initial="hidden"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [
                      classNames(navItemClasses),
                      "transition-all ease-in-out duration-200 text-[#737791] font-medium hover:text-black",
                      isActive &&
                        "bg-orange px-2 lg:px-3 py-2 lg:py-3 rounded-md",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  <img src={`${icon}`} className="w-[15px] md:w-5" />
                </NavLink>
              </motion.li>
            );
          })}
        </ul>

        <div className="flex gap-5 flex-col">
          <img
            src={Toggler}
            alt="toggler"
            onClick={toggleTheme}
            className="cursor-pointer"
          />
          <img src={NavImage} alt="navImage" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
